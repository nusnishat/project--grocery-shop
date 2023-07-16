import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication = () =>{
    const app = initializeApp(firebaseConfig);
}
export default initializeAuthentication;
// steps-1 Initial setup:
// 1. firebase: create Project
// 2.create web app
// 3.get configeration
// 4.initialize firebase
// 5.enable auth method
// 
// Step-2:
// 1.create login Component
// 2.create register Component
// 3.create route for login and register 