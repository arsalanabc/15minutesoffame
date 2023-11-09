import React from 'react'
// import EmailForm from '../components/SubmitForm'
import HeaderBar from '../components/HeaderBar'
import PostForm from '../components/PostForm'
import PostRequestForm from '../components/PostRequestForm'
import { useParams } from 'react-router-dom'

function Submit (): React.ReactElement {
  const { uniqueCode } = useParams()

  return (
    <div>
      <HeaderBar title='Submit a post' redirectPage='home'/>
      <div className="App">
            {(uniqueCode != null) ? <PostForm uniqueCode={uniqueCode} /> : <PostRequestForm />}
          </div>
    </div>
  )
}

export default Submit
