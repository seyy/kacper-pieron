import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/theme';

const slideInFromLeft  = keyframes`
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ContactSection>
      <ContactMeText>SEND ME A TEXT</ContactMeText>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send message</SubmitButton>
      </Form>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  background-color: ${theme.colors.primary.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding: 50px 0;
`;

const ContactMeText = styled.p`
  color: ${theme.colors.primary.green.mint};
  font-size: 15px;
  font-family: monospace;
  font-weight: 600;
  margin-bottom: 15px;
  animation: ${slideInFromLeft} 2.3s;
  text-shadow: 0px 5px 55px ${theme.colors.primary.green.mint};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  max-width: 400px;
  width: 80%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${theme.colors.primary.green.mint};
  border-radius: 4px;
  width: 100%;
  animation: ${slideInFromLeft} 2.4s;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${theme.colors.primary.green.mint};
  border-radius: 4px;
  width: 100%;
  resize: vertical;
  min-height: 120px;
  animation: ${slideInFromLeft} 2.5s;
`;

const SubmitButton = styled.button`
  background-color: ${theme.colors.primary.green.mint};
  color: ${theme.colors.primary.black};
  border: none;
  padding: 9px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  animation: ${slideInFromLeft} 2.6s;
`;

export default Contact;
