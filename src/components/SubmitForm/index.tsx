import React, { useState } from 'react'
import { TextField, Button, Container, Typography } from '@mui/material'

function EmailForm (): React.ReactElement {
  const [email, setEmail] = useState('')
  const [isEmailValid, setEmailValid] = useState(true)

  function handleEmailChange (event: React.ChangeEvent<HTMLInputElement>): void {
    const emailValue = event.target.value
    // Use a regular expression to check if the email is valid
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
    setEmail(emailValue)
    setEmailValid(isValid)
  }

  function handleSubmit (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    // Handle form submission here, e.g., send the email to a server
    console.log('Submitted email:', email)
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" style={{ marginBottom: '16px' }}
          >Submit a Post</Typography>
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body1">
            Please enter a valid email address. An email will be sent with a link to create a post.
          </Typography>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isEmailValid || (email === '')}
          style={{ marginTop: '16px' }}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default EmailForm
