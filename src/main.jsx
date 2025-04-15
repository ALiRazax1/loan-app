import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import './index.css'
import {App} from './App.jsx'
import LoginPage from './pages/login.jsx'
import SignupPage from './pages/signup.jsx'
import { Dashboard } from './pages/dashboard'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<Routes>
  <Route path='/' element ={<App/>}>

  </Route>
  <Route path='/login' element={<LoginPage/>}></Route>
  <Route path='/signup' element={<SignupPage/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  </Routes></BrowserRouter>
  </StrictMode>,
)
