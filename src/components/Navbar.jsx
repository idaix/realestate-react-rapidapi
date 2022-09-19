import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { TbMenu } from 'react-icons/tb'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(prev=>!prev)
  }
  return (
    <nav className="p-3 bg-white rounded border-gray-200">
      { isOpen&&(
        <div className='fixed top-0 left-0 w-4/5 h-full bg-primary-light '>
          <ul className='flex flex-col gap-3 p-5 font-bold text-xl'>
            <li>
              <Link to="/" className="block py-1 hover:text-primary">Home</Link>
            </li>
            <li>
              <Link to="/search" className="block py-1 hover:text-primary">Properties</Link>
            </li>
            <li>
              <Link to="/search" className="block py-1 hover:text-primary">Rent Property</Link>
            </li>
            <li>
              <Link to="/search" className="block py-1 hover:text-primary">Sale Property</Link>
            </li>
          </ul>
        </div>
      ) }
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to=''>
          <Logo />
        </Link>
        <button
          type='button'
          className="inline-flex justify-center items-center ml-3 text-gray-400 md:hidden" aria-controls="navbar-solid-bg" aria-expanded="false"
          onClick={handleClick}
        >
          <TbMenu />
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex gap-3 text-light text-sm">
            <li>
              <Link to="/" className="block py-1 hover:text-primary">Home</Link>
            </li>
            <li>
              <Link to="/search" className="block py-1 hover:text-primary">Properties</Link>
            </li>
            <li>
              <Link to="/search" className="block py-1 hover:text-primary">Rent Property</Link>
            </li>
            <li>
              <Link to="/search" className="block py-1 hover:text-primary">Sale Property</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar