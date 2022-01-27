import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confing";

const firebaseInit = () => initializeApp(firebaseConfig);

export default firebaseInit;