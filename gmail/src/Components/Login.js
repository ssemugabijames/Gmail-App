import React from 'react'
import "./Login.css"
import { auth, provider} from '../firebase'
import Button from '@mui/material/Button'
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'


function Login() {
const dispatch = useDispatch();

const signIn = () =>{
  auth.signInWithPopup(provider)
  .then(({ user}) =>{
    dispatch(login({
         displayName: user.displayName,
         email: user.email,
         photoUrl: user.photoURL
    }))
  })
  .catch(error => alert(error.message));
}


  return (
    <div className="login">
    <div className="login__container">
     <img 
     src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/06/auto-delete-old-messages-in-gmail-img.webp?fit=1920%2C1080&ssl=1" 
     alt="" />
      <Button type="submit" onClick={signIn}>
       Login At Google WorkSpace
    </Button>
    </div>
    </div>
    
  )
}

export default Login