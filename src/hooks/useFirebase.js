import {useState , useEffect} from 'react';
import { getAuth , GoogleAuthProvider , signInWithPopup  , signOut , onAuthStateChanged , GithubAuthProvider,  getIdToken  } from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google login ------------------->

    const SigninGoogle = ( navigate , redirect_location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT");
                navigate(redirect_location);
            }).catch(() => alert("something Wrong"))
            .finally(() => setIsLoading(false));
    }

    // github login -------------------->

    const SigninGithub = (navigate , redirect_location) => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT");
                navigate(redirect_location);
            }).catch(() => alert("something Wrong"))
            .finally(() => setIsLoading(false));
    }


    // search admin ----------------------->

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
            }, [user.email]);

    // observer user state ------------------->
    
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user)
            {
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken', idToken));
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    
    // user logout state set ---------------->

    const logOut = () => {
        return signOut(auth)
    }

    // datebase post on register user --------------------------->

    const saveUser = (email, displayName , method) => {
        const user = { email, displayName };
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }

    return {
        user,
        setUser,
        logOut,
        SigninGoogle,
        SigninGithub,
        auth,
        isLoading,
        setIsLoading,
        saveUser,
        admin,
    }
};

export default useFirebase;