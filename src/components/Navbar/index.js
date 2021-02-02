import React, { useState } from 'react';
import Menu from '../Menu';
import Cart from '../Cart';

const Navbar = () => {

    const [catOpen, setCatOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const catToggle = () => {
        setCatOpen(!catOpen)
    }

    const cartToggle = () => {
        setCartOpen(!cartOpen)
    }


    return (
        <>
            {/* info */}
            {/* <div className="px-4 py-3 bg-gray-500 text-white">
                <p className="text-xs font-semibold text-center">
                    Gift with confidence. Returns are extended till January 15th.
                </p>
            </div> */}
            
            <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white border-b">
                <div className="flex inline-flex space-x-4">
                    <button className="h-8 w-8 md:hidden" onClick={catToggle}>
                        <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>
                    <div className="flex items-center hidden md:flex">
                        <a className="text-sm font-semibold text-gray-800 uppercase " href="#">Men</a>
                    </div>
                    <div className="flex items-center hidden md:flex">
                        <a className="text-sm font-semibold text-gray-800 uppercase" href="#">Women</a>
                    </div>
                </div>
                <div className="flex">
                    <img
                        className="h-9"
                        src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
                        alt="Allbirds"
                    />
                </div>
                <div className="flex inline-flex space-x-4">
                    <div className="flex items-center hidden md:flex">
                        <a className="text-sm font-semibold text-gray-800 uppercase " href="#">Our Materials</a>
                    </div>
                    <div className="flex items-center hidden md:flex">
                        <a className="text-sm font-semibold text-gray-800 uppercase" href="#">stores</a>
                    </div>
                    <button className="h-8 w-8 hidden md:flex">
                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                    <button className="h-8 w-8 hidden md:flex">
                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button className="h-8 w-8" onClick={cartToggle}>
                        <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                        </svg>
                    </button>
                </div>
                <Menu catOpen={catOpen} catToggle={catToggle} />
                <Cart cartOpen={cartOpen} cartToggle={cartToggle} />
            </header>
        </>
    )
}

export default Navbar
