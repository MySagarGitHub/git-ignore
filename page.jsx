import React from 'react'

function page({children}) {
  return (
    <div className='bg-gray-200 min-h-screen '>
      {children}
    </div>
  )

}
export const metadata = {
  title: 'My Page Title',
  description: 'This is a description of my web page',
}
  


export default page;
