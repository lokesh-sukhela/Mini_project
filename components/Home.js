import React from 'react'
import Popup from './popup'
import { Navigate, useNavigate } from 'react-router-dom'
import Profile from './TrainingSheet';


function Home() {
  const Navigate = useNavigate()
  return (
    <div>
    <div>

      <button onClick={(e) => {
      Navigate('/Popup')
    }}>POP-UP
    </button></div>
    <div>
      <button onClick={(e) => {
      Navigate('/Profile')
    }}>Profile page</button></div>
    </div>
  )
}

export default Home