import React from 'react'
import EmailForm from '../components/SubmitForm'
import HeaderBar from '../components/HeaderBar'

function Submit (): React.ReactElement {
  return (
    <div>
      <HeaderBar title='Submit a post' redirectPage='home'/>
      <div className="App">
            <EmailForm />
          </div>
    </div>
  )
}

export default Submit
