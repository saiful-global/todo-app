import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className='flex flex-col items-start gap-3 bg-black h-screen text-white'>
        <h1 className='py-15 px-50 text-5xl bg-violet-600 rounded-br-full text-bold items-center'>This is Home Page</h1>

        <Link className='underline btn btn-primary btn-gradient p-3 text-white hover:bg-green-500 bg-blue-600  rounded-full duration-500 flex items-center gap-2 hover:gap-18' to="/about">Go to About Page <FaArrowRight /> </Link>

        <br />

        <Link className='underline btn btn-primary btn-gradient p-3 text-white hover:bg-green-500 bg-blue-600  rounded-full duration-500 flex items-center gap-2 hover:gap-18' to="/contact">Go to Contact Page <FaArrowRight /></Link>

        <br />

        <Link className='underline' to="/Navigate">You can not go this page without login</Link>
    </div>
  )
}

export default Home