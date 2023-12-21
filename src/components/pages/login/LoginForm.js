import React, { useContext, useRef, useState } from "react";
import classes from './LoginForm.module.css';
import AuthContext from "../../auth- context";
import {useNavigate} from 'react-router-dom';  // useHistory is in version 5 of 'react-router-dom' not in version 6 , so we will use here useNavigate

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true)
    let url;
    // sign up (if not login) 
    if(!isLogin){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJi5G2GlVNZg7ADoXRYdjLngDkLdxVoaw'
    }
    // login
    else{
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJi5G2GlVNZg7ADoXRYdjLngDkLdxVoaw'
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({email: enteredEmail, password: enteredPassword, returnSecureToken: true}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        setIsLoading(false)
        if(res.ok){
            return res.json();
        }
        else{
            return res.json().then(data => {
                let errorMessage = 'Authentication Failed!'
                if(data && data.error && data.error.message){
                    errorMessage = data.error.message
                }
                throw new Error(errorMessage);
            })
        }
    })
    .then(data => {
        console.log(data)
        authCtx.login(data.idToken)
        navigate('/')

    })
    .catch(err => {alert(err.message)})

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="e-mail">Email: </label>
          <input type="email" id="e-mail" name="e-mail" required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create account"}</button>
          )}
          {isLoading && <p>Sending Request...</p>}
          <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
