import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screen/Home'
import Submit from './screen/submit'

function PageNotFound (): React.ReactElement {
  return <div>
    <h1>404 Error</h1>
    <h1>Page Not Found</h1>
  </div>
}

function AppRoutes (): React.ReactElement {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit/:uniqueCode" element={<Submit />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
  )
}

export default AppRoutes
