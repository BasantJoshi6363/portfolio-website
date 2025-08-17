import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './component/Projects'
import Home from './component/Home'
import ThankYou from './component/ThankYou'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/projects'  element={<Projects/>}></Route>
        <Route path='/' index  element={<Home/>}></Route>
        <Route path='/thankyou'  element={<ThankYou/>}></Route>
        <Route path='*' index  element={<h3 className='text-white text-center mt-[50vh]'> 404 Page Not Found</h3>}></Route>
      </Routes>
    </div>
  )
}

export default App