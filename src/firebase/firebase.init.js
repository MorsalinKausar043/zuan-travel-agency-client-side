import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confing";

const firebaseInitializetion = () => initializeApp(firebaseConfig);

export default firebaseInitializetion;