import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './ProtectedRoutes';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Protected Route (only logged-in users can access) */}
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
          </Route>

          {/* Default Route */}
          <Route path="*" element={<Login />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
    </>
  )
}

export default App
