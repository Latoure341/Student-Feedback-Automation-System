import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormWrapper,
  FormStyle,
  InputStyle,
  TextareaStyle,
} from "./Feedback.styled.js";

const initialState = {
  fullName: "",
  email: "",
  courseName: "",
  rating: "",
  message: "",
};

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const validate = () => {
    const validationErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const rating = Number(formData.rating);

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!formData.courseName.trim()) {
      validationErrors.courseName = "Course name is required.";
    }

    if (!formData.rating) {
      validationErrors.rating = "Rating is required.";
    } else if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      validationErrors.rating =
        "Rating must be a whole number between 1 and 5.";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Feedback message is required.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("");

    if (!validate()) {
      return;
    }

    const preparedPayload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      courseName: formData.courseName.trim(),
      rating: Number(formData.rating),
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

      if (!webhookUrl) {
        throw new Error("Webhook URL is not configured.");
      }

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preparedPayload),
      });

      setSubmitStatus("Feedback submitted successfully.");
      setFormData(initialState);
      setErrors({});
    } catch (error) {
      setSubmitStatus("Encounter Browse error while submitting feedback. Please wait 2 minutes for a possible successful submission.");
      console.error("Feedback submit error:", error);
    }
  };

  return (
    <FormContainer>
      <FormStyle>
        <h3 onClick={() => navigate("/")}>Student Feedback</h3>
        <FormWrapper as="form" onSubmit={handleSubmit} noValidate>
          <span>
            <label htmlFor="fullName">Full Names</label>
            <InputStyle
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <small>{errors.fullName}</small>}
          </span>

          <span>
            <label htmlFor="email">Email</label>
            <InputStyle
              id="email"
              name="email"
              type="email"
              placeholder="youremail@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email}</small>}
          </span>

          <span>
            <label htmlFor="courseName">Course Name</label>
            <InputStyle
              id="courseName"
              name="courseName"
              type="text"
              placeholder="FullStack Web Development"
              value={formData.courseName}
              onChange={handleChange}
            />
            {errors.courseName && <small>{errors.courseName}</small>}
          </span>

          <span>
            <label htmlFor="rating">Rating (1-5)</label>
            <InputStyle
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleChange}
            />
            {errors.rating && <small>{errors.rating}</small>}
          </span>

          <span>
            <label htmlFor="message">FeedBack Message</label>
            <TextareaStyle
              id="message"
              name="message"
              cols={38}
              rows={4}
              placeholder="Type your feedback here..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <small>{errors.message}</small>}
          </span>

          <button type="submit">Submit</button>
          {submitStatus && <p>{submitStatus}</p>}
        </FormWrapper>
      </FormStyle>
    </FormContainer>
  );
};

export default FeedbackForm;
