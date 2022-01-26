import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confing";

const firebaseAuthentication = () => initializeApp(firebaseConfig);

export default firebaseAuthentication;