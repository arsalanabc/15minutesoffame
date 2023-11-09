import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { PostTypes, getPostRequest, submitPost } from '../../api/ApiClient'

// enum POST_TYPES {
//   Instagram = 0,
//   YouTube = 1,
//   Twitter = 2,
//   Image = 3,
//   Facebook = 4,
//   LinkedIn = 5,
//   Pinterest = 6,
//   TikTok = 7
// }

export interface FormData { uniqueCode: string, link: string, postType: string }
export interface PostSubmitType { uniqueCode: string, link: string, postType: string }

function getPostTypesOptions (): React.ReactElement[] {
  const postTypes = Object.keys(PostTypes).filter(i => (isNaN(Number(i)))).sort()

  const options: React.ReactElement[] = []

  postTypes.forEach((key, i) => {
    options.push(<MenuItem key={i} value={key}>{key}</MenuItem>)
  })

  return options
}

function PostForm ({ uniqueCode }: { uniqueCode: string }): React.ReactElement {
  const [responseText, setResponseTest] = useState<string>('')
  const [isUniqueCodeValide, setIsUniqueCodeValide] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    uniqueCode,
    link: '',
    postType: ''
  })

  useState(() => {
    getPostRequest(uniqueCode).then((response) => {
      if (response.status === 200) {
        setIsUniqueCodeValide(true)
      } else {
        setResponseTest('This link is either invalid or expired!')
      }
    }).catch((e) => {
      setResponseTest(e)
    })
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
    submitPost(formData).then(data => {}).catch(console.error)
    // Handle form submission here
    console.log('Form Data:', formData)
  }

  const validateForm = ({ link, postType }: FormData): boolean => {
    const linkPattern = /^https?:\/\/\S+$/

    const isPostTypeValid = postType !== ''

    return linkPattern.test(link) && isPostTypeValid
  }

  return (
    <Container maxWidth="sm" >
      { !isUniqueCodeValide
        ? <Typography variant="h4" style={{ marginBottom: '16px' }}> {responseText} </Typography>
        : <form onSubmit={handleSubmit}>
        <Typography variant="h4" style={{ marginBottom: '16px' }}> Submit a post </Typography>

        {/* <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{ marginBottom: '16px' }}
        /> */}
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
            name="postType"
            value={formData.postType}
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
      </form> }
    </Container>
  )
}

export default PostForm
