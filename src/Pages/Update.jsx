import React, { useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router';
import { update,ref } from 'firebase/database';
import db from '../../firebase.config';

const Update = () => {
    const { state } = useLocation();
    let [updateTask,setUpdateTask] = useState(state.task);
    let navigate = useNavigate()


    let handleUpdate = () => {
        update(ref(db, "todolist/" + state.id), { todo:updateTask}).then(()=>{
            alert("updated")
            navigate("/")
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    console.log(state);
    
    
  return (
    <div className='bg-black text-white px-5 md:px-15'>
      <h1 className='text-3xl md:text-5xl py-20 flex justify-center items-center gap-5'><FiEdit />Edit Your Note</h1>

      <div className='bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600 p-0.5 md:p-1 font-bold text-center rounded-full'>
        <div className=' p-1.5 md:p-2 bg-black rounded-full flex text-center justify-center items-center'>

            <input value={updateTask} onChange={(e)=> setUpdateTask(e.target.value)} className='w-full p-2 md:p-3 md:text-2xl text-white mr-2 md:mr-5 rounded-full' placeholder='Edit Your Task' type="text" />

            <button onClick={handleUpdate} className='text-white bg-green-600 md:bg-green-700 hover:scale-150 transition-all hover:bg-green-500 text-2xl md:text-4xl p-2 md:p-3 font-bold rounded-full' ><MdOutlineDone /></button>
        </div>
      </div>
    </div>
  )
}

export default Update