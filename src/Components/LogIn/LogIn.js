import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGolfBall, faGoogle, faGooglePlus } from '@fortawesome/free-solid-svg-icons'
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import './LogIn.css';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const LogIn = () => {
    const [user, setUser] = useState({})

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var facebookProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(user);
                setUser(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email);
            });
    }
    const handleFacebookSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                console.log(user);
                setUser(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email);
            });
    }

    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFormValid = e.target.value.length > 6;
        }
        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleFormSubmit = (e) => {
        if (user.name && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }

        e.preventDefault()
    }
    return (
        <div>

            <div className="form-div">
                <form onSubmit={handleFormSubmit}>
                    <input className="inputStyle" type="text" name="name" onBlur={handleBlur} placeholder="Your Name" />
                    <br /><br />
                    <input className="inputStyle" type="text" name="email" onBlur={handleBlur} placeholder="User Name Or Email" required /><br />
                    <br />
                    <input className="inputStyle" type="password" name="password" onBlur={handleBlur} placeholder="Password" required /><br />
                    <br />
                    <input className="inputStyle" type="password" name="email" onBlur={handleBlur} placeholder="Confirm Password" required /><br />
                    <br />
                    <input className="inputStyle" type="submit" value="Submit" /><br /><br /><br />
                </form>

            </div>
            <div className="btn-div">
                <Button onClick={handleGoogleSignIn} variant="contained" color="secondary"><GTranslateIcon /> Sign In With Google</Button><br />
                <br />
                <Button onClick={handleFacebookSignIn} variant="contained" color="primary"><FacebookIcon /> Sign In With Facebook</Button><br />
                {/*          
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faGolfBall} /> */}
                {/* <FontAwesomeIcon  icon={faGooglePlus} /> */}
                {/* <FontAwesomeIcon  icon={faGoogle} /> */}

                {/* <img src={user.photoURL} alt="" />
                <h3>User Email:{user.email}</h3>
                <h5>User Name:{user.name}</h5>
 */}
            </div>
        </div>
    );
};

export default LogIn;
