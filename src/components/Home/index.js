import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Products from '../Products';
import Filter from '../Filter';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const categories = [
        `Women's Running Shoes`,
        `Everyday Sneakers`,
        `Slip-Ons`,
        `High Tops`,
        `Boat Shoes`,
        `Flats`,
        `Weather Repellent Shoes`,
    ];

    return (
        <>
            <main>
                <div className="md:hidden">
                    <div className="flex items-center justify-between px-8 pt-4 pb-3 md:px-12 ">
                        {/* breadcrumb */}
                        <div>
                            <div className="text-xs font-bold text-gray-900 space-x-1">
                                <a href="#" className="underline">
                                    Home
                                </a>
                                <span>/</span>
                            </div>
                            <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                                Women's Shoes
                            </h1>
                        </div>
                        {/* filter */}
                        <div>
                            <button className="block h-6 w-6" onClick={toggle}>
                                <svg
                                    className="transform rotate-90"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Filter isOpen={isOpen} toggle={toggle} />
                    </div>
                    {/* category */}
                    <div className="bg-gray-100 py-2 overflow-x-auto scrollbars-hidden">
                        <div className="px-8 text-sm inline-flex space-x-5 md:px-12">
                        {categories.map((category) => (
                            <a
                                href="#"
                                key={category}
                                className="font-medium text-gray-800 whitespace-nowrap"
                            >
                            {category}
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
                {/* main */}
                <div className="md:container md:mx-auto md:px-8">
                    <div className="md:flex md:flex-no-wrap md:-mx-6">
                        <Sidebar />
                        <Products />  
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
