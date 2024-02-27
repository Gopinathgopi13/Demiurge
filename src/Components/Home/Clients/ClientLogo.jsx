import React from 'react'

function ClientLogo({logo}) {
  return (
    <div className='lg:w-[200px] lg:m-5 flex justify-center items-center'>
      <div>
        <img src={logo} className='w-full h-full' alt="" />
      </div>
    </div>
  )
}

export default ClientLogo
