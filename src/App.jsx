import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css"
import Home from './Home';

const App = () => {
  const container = useRef();


  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: container.current,
      smooth: true,
      lerp: .1
    })
  })
  return (
    <div ref={container} className='text-white size-full'>
      <Home/>
    </div>
  )
}

export default App