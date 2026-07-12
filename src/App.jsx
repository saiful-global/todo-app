import React, { useState, useEffect } from 'react'
import { ref, set, push, onValue, remove } from "firebase/database";
import db from '../firebase.config';
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from 'react-router';
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";



const App = () => {

  const [task,setTask] = useState("");
  const [alltasks,setAlltasks] = useState([]);
  
  // btn
  const handleAddTask = () => {
    if(!task){
      alert("task is Requird!!!");
    }
    else{
    set(push(ref(db, 'todolist/')), {
      todo: task,
    })
      .then(()=>{
        setTask("");
      })
      .catch((err)=>{
        alert(err.message);
      });
    }
  };

  // input 
  const handleTask =(e)=>{
    setTask(e.target.value);
  };

  useEffect(()=>{
    const todoRef = ref(db, "todolist/");

    onValue(todoRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push({...item.val(), id: item.key });
      });
      setAlltasks(array)
    });
  },[]);

//// Delete Task
  const handleTaskDelete = (id) => {
    remove(ref(db, "todolist/" + id))
  }


  return (
    <div className='bg-black pb-100 text-white' >   
      {/* Heading  */}
      <div className='bg-linear-to-b from-black via-purple-500 to-cyan-600 p-1 font-bold mb-15 md:mb-20 text-center rounded-b-full text-white text-xl md:text-5xl'>
        <div className='p-3 gap-2 md:gap-5 bg-linear-to-r from-black via-[#710a71] to-black rounded-b-full flex text-center justify-center items-center'>
          Realtime Notes Manager <div className='text-gray-400'><LuNotebookPen /></div> 
        </div>
      </div>

      {/* input & body part */}
      <div className='px-5 md:px-30'>
        <div className='bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600 p-0.5 md:p-1 mb-15 md:mb-20 text-center rounded-full'>
          <div className='p-1.5 md:p-2 bg-black rounded-full flex text-center justify-center items-center'>
            <input className='w-full p-2 md:p-3 text-lg md:text-2xl text-white mr-2 md:mr-5 rounded-full' placeholder='Write your note here' onChange={handleTask} value={task} type="text" />
            <button className='text-black bg-white text-2xl md:text-4xl p-1 md:p-2 font-bold rounded-full hover:bg-green-600 hover:text-white' onClick={handleAddTask} ><IoIosAddCircleOutline /></button>
          </div>
        </div>

        {/* all tasks */}
        {alltasks.map((item,index) => (
          <div key={index} className='md:text-xl flex items-center gap-3 border border-gray-500 rounded-[20px] my-2 md:my-5 p-2 md:p-5'>
            <h2 className=''>{item.todo}</h2>
            <button className='p-2 bg-blue-800 rounded-br-2xl rounded-tl-2xl'>
              <Link to='/edit' state={{id: item.id , task:item.todo}}><FiEdit /></Link>
            </button>
            <button onClick={()=> handleTaskDelete(item.id)} className=' text-red-600 md:text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-950 bg-red-950 md:bg-black text-2xl md:text-4xl'><MdDeleteForever />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App