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
    <div className='text-red-500'>Other girls</div>
    <p>Riya</p>
    <p>Roshan</p>
    <p>Rashi</p>
    <p>Nenuji</p>
    <p>Rennee</p>
    <p>Muslim</p>
    <p>Pari</p>
    <p>Aashifa</p>
    </>
  )
}

export default girls