import React, { FormEventHandler, useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValid] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    // Use a regular expression to check if the email is valid
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    setEmail(emailValue);
    setEmailValid(isValid);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here, e.g., send the email to a server
    console.log('Submitted email:', email);
  };

  return ( 
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Email Form</Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={!isEmailValid}
          helperText={!isEmailValid ? 'Invalid email address' : ''}
          required
          style={{ marginBottom: '16px' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isEmailValid || !email}
          style={{ marginTop: '16px' }} 
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default EmailForm;
