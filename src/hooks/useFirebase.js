import { getAuth , GoogleAuthProvider , signInWithPopup , signOut , getIdToken , onAuthStateChanged , GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseinit from "../firebase/firebase.init";

firebaseinit();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading ] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const SigninGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const SigninGithub = () => {
       return signInWithPopup(auth, githubProvider)
    }

    useEffect(() =>
        onAuthStateChanged(auth, (user) => {
            if (user)
            {
                setUser(user)
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken', idToken));
            }
            else
            {
                setUser({})
            }
        })
        , [auth]);
    
    const logOut = () => {
        return signOut(auth);
    }
    
    return {
        user,
        logOut,
        SigninGoogle,
        SigninGithub,
        auth,
        setUser,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;