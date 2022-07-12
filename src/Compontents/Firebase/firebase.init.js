import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeaFirebase = () => {
    initializeApp(firebaseConfig);

}
export default initializeaFirebase;