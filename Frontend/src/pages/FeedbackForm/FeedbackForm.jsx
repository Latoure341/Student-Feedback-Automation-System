import React from 'react'
import { FormContainer, FormWrapper,
    FormStyle, InputStyle,
    TextareaStyle } from './Feedback.styled.js';

const FeedbackForm = () => { 
  return (
    <FormContainer>
        <FormStyle>
            <h3>Student Feedback</h3>
            <FormWrapper>
                <span>
                    <label>Full Names</label>
                    <InputStyle type='text' placeholder='Enter your name' />
                </span>
                <span>
                    <label>Email</label>
                    <InputStyle type='text' placeholder='youremail@gmail.com' />
                </span>
                <span>
                    <label>Course Name</label>
                    <InputStyle type='text' placeholder='FullStack Web Development' />
                </span>
                <span>
                    <label>Rating (1-5)</label>
                    <InputStyle type='number' placeholder='2' />
                </span>
                <span>
                    <label>FeedBack Message</label>
                    <TextareaStyle cols={38} rows={4}></TextareaStyle>
                </span>
                <button type='submit'>Submit</button>
            </FormWrapper>
        </FormStyle>
    </FormContainer>
  )
}

export default FeedbackForm