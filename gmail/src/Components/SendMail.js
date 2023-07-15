import React from 'react'
import './SendMail.css'
import Close from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from "react-hook-form"
import  { useDispatch } from "react-redux"
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../firebase'
import firebase from 'firebase'
function SendMail() {
    const { register, handleSubmit, formState } = useForm();

    const onSubmit= (formData) => {
     db.collection('emails').add({
      to:formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
    }
  
    const dispatch = useDispatch();
   
  return <div className='sendmail'>
     <div className='sendmail__header'>
        <h3>New Message</h3>
        <Close
        onClick={() => {dispatch(closeSendMessage())}} 
        className="sendmail__close" />
       </div>
     <form onSubmit={handleSubmit(onSubmit)} >
        <input name="to" placeholder="To" type="email" {...register("to",{ required: "required",})} />
        {formState.errors.to && <p className='sendmail__error'>To is Required!</p>}
        <input  name="subject"placeholder=" Subject" type="text" {...register("subject",{ required: "required",})}/>
        {formState.errors.subject && <p className='sendmail__error'>Subject is Required!</p>}
        <input name="message" placeholder="Message.." type="text" className='sendmail__message'{...register("message",{ required: "required",})}/>
        {formState.errors.message && <p className='sendmail__error'>Message is Required!</p>}
        <div className='sendmail__options'>
            <Button className='sendmail__send'
            variant="contained" 
            color="primary" 
            type="submit"
            >Send</Button> 
        </div>
     </form>
    </div>
  
}

export default SendMail