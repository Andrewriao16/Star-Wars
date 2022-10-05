import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 pl-6 fixed w-full">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Star Wars</span>
                </div>
                <div className="w-auto flex justify-end">
                    <div className="text-sm flex-grow">
                        <NavLink to="/home" className="block inline-block lg:mt-0 text-teal-200 hover:text-white ml-4 pr-4">
                            Home
                        </NavLink>
                        <NavLink
                            to="/favorite"
                            className="block inline-block lg:mt-0 text-teal-200 hover:text-white ml-4 pr-4">
                            Favorite
                        </NavLink>

                    </div>
                </div>
            </nav>
            <span className='py-6 block'></span>
        </>
    );
};

export default Navigation;