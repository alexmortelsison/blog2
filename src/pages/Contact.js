// src/pages/Contact.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h1" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        We’d love to hear from you! Whether you have questions, feedback, or just want to reach out, you can contact us using the information below or by filling out the contact form.
      </Typography>
      <Box marginBottom={2}>
        <Typography variant="h6">Contact Information:</Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> support@fakewebsite.com
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Phone:</strong> (555) 123-4567
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Address:</strong> 7890 Fake Street, Imaginary City, XY 12345
        </Typography>
      </Box>
      <Typography variant="h6">Contact Form:</Typography>
      <Typography variant="body1" paragraph>
        If you prefer, you can also use the form below to send us a message directly.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Name:</strong> [Your Name Here]
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Email:</strong> [Your Email Here]
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Message:</strong> [Your Message Here]
      </Typography>
    </Container>
  );
};

export default Contact;
