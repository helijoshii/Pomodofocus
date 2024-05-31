import React from 'react'
import { useNavigate } from 'react-router-dom'

const girls = () => {
    const navigate = useNavigate();
    const Heli = {
        name: "Heli",
        age: 22,
        location: "Rajkot ni gali ma",
    }
    setTimeout(() => {
        navigate("/favgirls", { state:  Heli });
      }, 1000);
  return (
    <>
    
    </>
  )
}

export default girls