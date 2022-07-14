import React from 'react';
import { Link } from 'react-router-dom';
// import DropDown from './DropDown';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-2 px-2 bg-stone-100">
            <Link to="/">
                <h1 className="text-black/90 p-2 font-bold text-2xl">Logo</h1>
            </Link>
            <div className="p-2 text-black/75 font-[500]">
                <span className="pr-2">
                    <a href="/">Home</a>
                </span>
                <span>DropDown</span>
            </div>
        </nav>
    );
};

export default Navbar;
