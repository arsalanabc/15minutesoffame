import React from 'react'
// import EmailForm from '../components/SubmitForm'
import HeaderBar from '../components/HeaderBar'
import PostForm from '../components/PostForm'
import EmailForm from '../components/SubmitForm'
import { useParams } from 'react-router-dom'

function Submit (): React.ReactElement {
  const { id } = useParams()

  return (
    <div>
      <HeaderBar title='Submit a post' redirectPage='home'/>
      <div className="App">
            {(id != null) ? <PostForm /> : <EmailForm />}
          </div>
    </div>
  )
}

export default Submit
