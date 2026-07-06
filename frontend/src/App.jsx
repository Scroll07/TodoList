import { Routes, Route } from 'react-router-dom'

import './App.css'

import BaseLayout from './layouts/BaseLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  
  return (
    <Routes>
        <Route element={<BaseLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/web/login' element={<LoginPage />} />
            <Route path='/web/register' element={<RegisterPage />} />

        </Route>
    </Routes>
  )
}

export default App
