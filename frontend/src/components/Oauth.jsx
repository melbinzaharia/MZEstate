import React from 'react'
import {GoogleAuthProvider,getAuth,signInWithPopup} from '@firebase/auth'
import { app } from '../firebase';

export default function Oauth() { // google oauth 

    const handleGoogleAuth = async () => {
        try {
            const provider =  new GoogleAuthProvider();
            const auth = new getAuth(app);
            const result = await signInWithPopup(auth,provider);
            console.log(result);
        } catch (error) {
          console.log('could not sign-in with google', error)  ;
        }
    }
  return (
    <button type='button' onClick={handleGoogleAuth} 
    className='bg-red-700 text-white p-3 rounded-lg uppercase 
    hover:opacity-95'>CONTINUE WITH GOOGLE</button>
  )
}
