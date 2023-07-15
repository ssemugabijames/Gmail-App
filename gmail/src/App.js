import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import EmailList from './Components/EmailList';
import Sidebar from './Components/Sidebar';
import Mail from './Components/Mail';
import SendMail from './Components/SendMail';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';
import { auth } from './firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const  user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect (() =>{
  auth.onAuthStateChanged(user => {
     if (user) {
      //login user
      dispatch(Login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }))
     }else{

     }
  })
  },[])
  return (
    <Router>
      {!user ?(
        <Login />
      ):(
    <div className="app">
      <Header />
      <div className='app__body'>
      <Sidebar />
      <Routes>
       <Route path='/mail' element={<Mail />} />
       <Route path='/' element={<EmailList />} />
      </Routes>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
      )}
    </Router >
  );
}

export default App;
