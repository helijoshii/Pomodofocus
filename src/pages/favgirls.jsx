import React from 'react'
import { useLocation } from 'react-router-dom'

const favgirls = () => {
    const Location = useLocation();
    const {name, age, location} = Location.state;

  return (
    <>
    <div className='text-green-400'>Mann's fav girl</div>
    <p>Her name: {name}</p>
    <p>Her age: {age}</p>
    <p>Her location: {location}</p>
    </>
  )
}

export default favgirls