import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PostTypes } from '../../api/ApiClient'

export interface FormData { email: string, link: string, dropdown: string }

function getPostTypesOptions (): React.ReactElement[] {
  const postTypes = Object.keys(PostTypes).filter(i => (isNaN(Number(i)))).sort()

  const options: React.ReactElement[] = []

  postTypes.forEach((key, i) => {
    options.push(<MenuItem key={i} value={key}>{key}</MenuItem>)
  })

  return options
}

function PostForm (): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    link: '',
    dropdown: ''
  })

  const [isFormValid, setFormValid] = useState(false)

  const handleInputChange = (e: { target: { name: any, value: any } }): void => {
    const { name, value } = e.target

    const newState = {
      ...formData,
      [name]: value
    }

    console.log(newState)
    // Check if all fields are valid
    const isValid = validateForm(newState)
    setFormValid(isValid)

    // Update the form data state
    setFormData(newState)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleSubmit (e: React.FormEvent) {
    e.preventDefault()
    // Handle form submission here
    console.log('Form Data:', formData)
  }

  const validateForm = ({ email, link, dropdown }: FormData): boolean => {
    // Add your validation logic here
    // For example, you can use regular expressions for email and link validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const linkPattern = /^https?:\/\/\S+$/

    const isDropdownValid = dropdown !== ''

    return emailPattern.test(email) && linkPattern.test(link) && isDropdownValid
  }

  return (
    <Container maxWidth="sm" >
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" style={{ marginBottom: '16px' }}> Submit a post </Typography>

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{ marginBottom: '16px' }}
        />
        <TextField
          fullWidth
          label="Link"
          variant="outlined"
          type="text"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          required
          style={{ marginBottom: '16px' }}
        />
        <FormControl fullWidth variant="outlined" required>
          <InputLabel>Post Type</InputLabel>
          <Select
            name="dropdown"
            value={formData.dropdown}
            onChange={handleInputChange}
            label="Post Type"
          >
            {getPostTypesOptions()}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isFormValid}
          style={{ marginTop: '16px' }}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default PostForm
