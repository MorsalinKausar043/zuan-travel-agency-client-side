import { getAuth , GoogleAuthProvider , signInWithPopup , signOut , onAuthStateChanged , GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseinit from "../firebase/firebase.init";

firebaseinit();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
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
            }
            else
            {
                setUser({})
            }
        })
        , [auth]);
    
    const logOut = () => {
        return signOut(auth)
    }

    console.log(user);
    
    return {
        user,
        logOut,
        SigninGoogle,
        SigninGithub,
        auth,
        setUser
    }
}

export default useFirebase;