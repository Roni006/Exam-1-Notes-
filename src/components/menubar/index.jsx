import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header className="header-section bg-black">
        <div className="container">
            <div className="header-row text-white flex justify-between py-5 items-center">
                <div className="header-left">
                <Link to="/"  className='text-white text-2xl mx-4'>Home</Link>
                </div>
                <div className="header-right">
                    <div className="menus">
                        {/* <ul className='flex gap-x-5 text-2xl'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Task View</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul> */}
                        <Link to="/"  className='text-white text-2xl mx-4'>Home</Link>
                        <Link to="/taskview" className='text-white text-2xl mx-4'>Task View</Link>
                        <Link to="/contact" className='text-white text-2xl mx-4'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar