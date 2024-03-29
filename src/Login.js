import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import {auth, provider} from './firebase'
import { signInWithPopup } from 'firebase/auth'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in... 
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                console.log(result);
            })
            .catch((error) => alert(error.message));

            //     // This gives you a Google Access Token. You can use it to access the Google API.
            //     const credential = provider.credentialFromResult(result);
            //     const token = credential.accessToken;
            //     dispatch({
            //         type: actionTypes.SET_USER,
            //         user: result.user,
            //     })
            //     // ...
            // }).catch((error) => {
            //     // Handle Errors here.
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     // The email of the user's account used.
            //     const email = error.customData.email;
            //     // The AuthCredential type that was used.
            //     const credential = provider.credentialFromError(error);
            //     // ...
            // });
          }
  return (
    <div className='login'>
        <div className='login__logo'>
            <img src='https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg' alt='' /> 
            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='' />  
        </div>
        <Button type='submit' onClick={signIn}>Sign in</Button>  
    </div>
  )
}

export default Login