import React from 'react'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Blogs from './pages/Blogs'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/blogs' element={<Blogs/>}></Route>
<Route path='/sign-in' element={<SignIn/>}></Route>
<Route path='/sign-up' element={<SignUp/>}></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
      App 
    </Routes>
    </BrowserRouter>
  )
}

export default App