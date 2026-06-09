import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeContainer, HomeButton } from './Home.styled.js'

const Home = () => {
    const navigate = useNavigate()

  return (
    <HomeContainer>
        <h1> Student Feedback Automation System</h1>
        <HomeButton
        onClick={() => navigate("/feedbackForm")} 
        type='button'>Proceed To The Form</HomeButton>
    </HomeContainer>
  )
}

export default Home