import { Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './screen/Home'
import Submit from './screen/submit'

function AppRoutes () {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit/:id" element={<Submit />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
  )
}

export default AppRoutes
