import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase.Config"
const authenticationInit = () =>{
    initializeApp(firebaseConfig)
}
export default authenticationInit