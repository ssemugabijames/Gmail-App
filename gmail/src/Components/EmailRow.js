import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from '@mui/material'
import  StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from '../features/mailSlice'

function EmailRow({id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
      id, 
      title,
       subject, 
       description,
       time,
      })
      );
      navigate("/mail")
  };
  return (
    <div onClick={openMail} className='emailrow'>
    <div className='emailrow__options'>
     <Checkbox />
     <IconButton>
        <StarBorderOutlinedIcon />
     </IconButton>
     <IconButton>
        <LabelImportantOutlinedIcon />
     </IconButton>
    </div>
    <div className='emailrow__title'>
    {title}
    </div>
    <div className='emailrow__message'>
    <h4>{subject}{" "}
    <span className='emailrow__description'>-
      {description}
    </span>
    </h4>
    </div>
    <p className='emailrow__time'>
     {time}
    </p>
    </div>
  )
}

export default EmailRow