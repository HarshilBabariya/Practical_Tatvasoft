import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../dashoard/Dashboard'
import UserForm from '../common/UserForm'

const RouteIndex = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/user' element={<UserForm isEdit={false} />} />
            <Route path='/user/:userId' element={<UserForm isEdit={true} />} />
        </Routes>
    </Router>
  )
}

export default RouteIndex