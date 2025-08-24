import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ContactForm = styled.div`
  flex: 2;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactInfo = styled.div`
  flex: 1;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

const InfoText = styled.div`
  font-size: 14px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>
        <Content>
          <ContactForm>
            <FormTitle>Send us a Message</FormTitle>
            <TextInput
              label="Name"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              handelChange={handleChange}
            />
            <TextInput
              label="Email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              handelChange={handleChange}
            />
            <TextInput
              label="Subject"
              placeholder="Enter subject"
              name="subject"
              value={formData.subject}
              handelChange={handleChange}
            />
            <TextInput
              label="Message"
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              handelChange={handleChange}
              textArea
              rows={6}
            />
            <Button
              text="Send Message"
              onClick={handleSubmit}
              isLoading={loading}
              isDisabled={loading}
            />
          </ContactForm>
          
          <ContactInfo>
            <FormTitle>Get in Touch</FormTitle>
            <InfoItem>
              <Email sx={{ color: "inherit" }} />
              <InfoText>support@fittrack.com</InfoText>
            </InfoItem>
            <InfoItem>
              <Phone sx={{ color: "inherit" }} />
              <InfoText>+1 (555) 123-4567</InfoText>
            </InfoItem>
            <InfoItem>
              <LocationOn sx={{ color: "inherit" }} />
              <InfoText>123 Fitness Street, Health City, HC 12345</InfoText>
            </InfoItem>
            <div>
              <FormTitle style={{ marginBottom: "12px" }}>Office Hours</FormTitle>
              <InfoText>Monday - Friday: 9:00 AM - 6:00 PM</InfoText>
              <InfoText>Saturday: 10:00 AM - 4:00 PM</InfoText>
              <InfoText>Sunday: Closed</InfoText>
            </div>
          </ContactInfo>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Contact;
