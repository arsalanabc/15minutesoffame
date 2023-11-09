import React, { useState } from 'react'
import { TextField, Button, Container, Typography } from '@mui/material'
import { submitPostRequest } from '../../api/ApiClient'

function PostRequestForm (): React.ReactElement {
  const [email, setEmail] = useState('')
  const [isEmailValid, setEmailValid] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleEmailChange (event: React.ChangeEvent<HTMLInputElement>): void {
    const emailValue = event.target.value
    // Use a regular expression to check if the email is valid
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
    setEmail(emailValue)
    setEmailValid(isValid)
  }

  function handleSubmit (event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    submitPostRequest(email)
      .then(response => {
        if (response.status === 200) {
          setIsSubmitted(true)
        }
      }).catch(console.error)

    // Handle form submission here, e.g., send the email to a server
    console.log('Submitted email:', email)
  }

  return (
    <Container maxWidth="sm">
      {isSubmitted
        ? <Typography variant="h4" style={{ marginBottom: '16px' }}
          >Please check your email for the link to submit a post</Typography>
        : <form onSubmit={handleSubmit}>
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
              Please enter a valid email address. An email will be sent with the link to create a post.
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
      }
    </Container>
  )
}

export default PostRequestForm
