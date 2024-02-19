import React from 'react'

function ClientLogo({logo}) {
  return (
    <div className='lg:w-[200px] h-[150px] lg:m-5 flex justify-center items-center'>
      <div className='w-[70%] h-[70%]'>
        <img src={logo} className='w-full h-full' alt="" />
      </div>
    </div>
  )
}

export default ClientLogo
