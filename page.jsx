import React from 'react'

function page({children}) {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {children}
    </div>
  )
}

export default page;
