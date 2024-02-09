import React from 'react'

function ClientLogo({logo}) {
  return (
    <div className='w-[200px] h-[150px] m-5 border flex justify-center items-center'>
      <div className='w-[90%] h-[90%]'>
        <img src={logo} className='w-full h-full' alt="" />
      </div>
    </div>
  )
}

export default ClientLogo
