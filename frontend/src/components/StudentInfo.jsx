import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { saveToState } from '../Redux/updateSlice';
import axios from 'axios';
import { toast } from "react-toastify";


const StudentInfo = ({id,fullname,name,email,user}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const pushDataToUpdatePage = (user) =>{

    dispatch(saveToState(user));
    navigate('/update')
       
  }

  const deleteTargetUser = async() =>{
    try {

      const response = await axios.delete(' http://localhost:5000/user/' + id);
      toast.error("deleted refresh to see", {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
      });
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full  rounded-sm border-b border-green-500 pb-2 flex justify-between px-1 mt-7 mb-3'>
       <p className='p1 '>{id}</p>
       <p className='p-1'>{fullname}</p>
       <p className='p-1'>{name}</p>
       <p className='p-1'>{email}</p>
       <div className='flex gap-x-1'>
       <p
       onClick={deleteTargetUser}
       className='p-1 text-red-600 hover:scale-110 cursor-pointer'><ion-icon name="trash"></ion-icon></p>
       <p 
       onClick={ e=>pushDataToUpdatePage(user)}
       className='p-1 text-green-600 hover:scale-110 cursor-pointer' ><ion-icon name="create"></ion-icon></p>
       </div>
       
    </div>
  )
}

export default StudentInfo