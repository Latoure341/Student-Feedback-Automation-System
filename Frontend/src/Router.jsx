import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import FeedbackForm from './pages/FeedbackForm/FeedbackForm'

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/feedbackForm' element={<FeedbackForm />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router