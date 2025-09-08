import React from 'react'

function page({children}) {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {children}
    </div>
  )
}
export const metadata = {
  title: 'My Page Title',
  description: 'This is a description of my page',
}

export default page;
