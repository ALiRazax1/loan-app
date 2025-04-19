import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import { MyProvider } from './context/userContext'
import './index.css'
import {App} from './App.jsx'
import LoginPage from './pages/login.jsx'
import SignupPage from './pages/signup.jsx'
import { Dashboard } from './pages/dashboard'
import { LoanRequest } from './pages/loan-request'
import NewLoan from './pages/new-loan'
import { MyApiProvider } from './context/dataContext'
import { Admin } from './pages/admin'
import { Profile } from './pages/profile'

createRoot(document.getElementById('root')).render(
  <StrictMode>  <MyProvider>
<MyApiProvider>
<BrowserRouter>
<Routes>
  <Route path='/' element ={<App/>}>

  </Route>
  <Route path='/login' element={<LoginPage/>}></Route>
  <Route path='/signup' element={<SignupPage/>}></Route>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/loan-request' element={<LoanRequest/>}></Route>
  <Route path='/new-loan' element={<NewLoan/>}/>
  <Route path='/profile' element={<Profile/>}></Route>
  </Routes></BrowserRouter></MyApiProvider></MyProvider>
  </StrictMode>,
)
