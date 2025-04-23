import React from 'react'

const Info = () => {
  return (
    <div className="gretting flex mt-5 flex-col items-center">
      <p className='text-[12px]'>Hello i'm</p>
      <h2 className='font-bold text-3xl mt-2'>Basant Raj Joshi</h2>
      <p className='capitalize text-[13px] mt-2'>aspring fullstack developer</p>
      <a href='#contact' className='bg-blue-600 px-4 py-3 mt-5 capitalize rounded-md hover:opacity-65 cursor-pointer'>let's talk</a>
    </div>
  )
}

export default Info