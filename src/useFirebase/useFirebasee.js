import React from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut,createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from '../firebase/firebase.init';
import {  useNavigate  } from 'react-router-dom';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const useFirebasee = () => {
    let navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState({})
    useEffect(()=>{
        onAuthStateChanged ( auth, user =>{
            if(user){
                console.log('inside state changed');
                setUser(user)
            }
        })
    }, [])


    const handleRegister = (event) => {

        event.preventDefault();
        const auth = getAuth();

        if (password.length < 6) {
            setError('Password should be atleast 6 character long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password should be atleast 2 upper letter');
            return;
        }
        /////////////////
        if (isLogin) {
            processLogin(email, password)
        }
        else {
            createNewUser(email, password)
        }
    }

    const logOut= ()=>{
        const auth = getAuth();
        signOut (auth)
        .then (()=>{
            setUser({});
            console.log('signoutted')
        })
    };

    const handleResetPassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please Check your email to reset your password');
            })
    }


    const processLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                navigate('/');
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const createNewUser = (email, password) => {
        alert('Let us know that this email address belongs to you. An verification link has sent to this email adress.Pleack check your and verify.');
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                emailVerify();
                setError('');
                console.log(user);
                navigate('/');
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const emailVerify = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);
            });

    }

    const setUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
            })
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }


    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }


    const toggoleLogin = event => {
        setIsLogin(event.target.checked)
    }

    const handleNameChange = event => {
        setName(event.target.value);
        setUserName()
    }

    return{
        handleNameChange,
        toggoleLogin,
        handlePasswordChange,
        handleEmailChange,
        handleResetPassword,
        handleRegister,
        isLogin,
        error,
        user,
        logOut
    }

}
export default useFirebasee;