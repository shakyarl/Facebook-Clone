import React from 'react'
import './Login.css'
import { Button } from '@mui/material'

function Login() {

    const signIn = () => {
        //sign in... 
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