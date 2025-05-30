import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-slate-800 text-white py-4'>
    <div className='text-center'>Copyright Facebook | All rights  reserved </div>
    <ul className=' flex gap-2 text-sm'>
        <a href="/" ><li className='text-xs'>Home</li></a>
        <a href="/about" ><li className='text-xs'>about</li></a>
        <a href="/contact" ><li className='text-xs'>about</li></a>
       

    </ul>
        
    </footer>
  )
}

export default Footer
