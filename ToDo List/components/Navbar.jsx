import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-900 text-white my-2 py-5 font-family: '>
        <div className='logo'>
            <span className='font-bold text-2xl mx-10'>
                MyTask
            </span>
        </div>
        <ul className="flex gap-10 mx-10">
            <li className='cursor-grab hover:font-bold transition-all duration-400'>Basics</li>
            <li className='cursor-grab hover:font-bold transition-all duration-400'>Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar