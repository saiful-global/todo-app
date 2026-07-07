import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Navigate = () => {

  let navigate = useNavigate()

  useEffect(()=>{
    navigate("/")
  },[])

  return (
    <div>Navigate</div>
  )
}

export default Navigate