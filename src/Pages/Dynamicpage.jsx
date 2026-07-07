import React from 'react'
import { useParams } from 'react-router'

const DynamicPage = () => {
  let {id} = useParams()
  return (
    
    <div className='text-8xl text-bold text-white bg-black h-screen w-full'> This is DynamicPage <span className='underline'>{id}</span> </div>
  )
}

export default DynamicPage



/////// route , react-router setup , dynamic route, link