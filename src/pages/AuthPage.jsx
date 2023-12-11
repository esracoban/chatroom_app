import React from 'react'
import {signInWithPopup, signInWithRedirect} from 'firebase/auth';
import { auth, provider } from './../firebase/firebaseConfig';


const AuthPage = () => {
  const handleClick = () => {
    signInWithRedirect(auth, provider);
  };
  return (
    <div className='auth'>
      <h1>Chat odası</h1>
      <p>Devam etmek için giriş yapın</p>

      <button onClick={handleClick}>
        <img src="/google.png" />
        <span>Google ile gir</span>
      </button>
    </div>
  )
}

export default AuthPage
