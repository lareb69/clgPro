import React from 'react';

const DropDown = () => {
    const menu = document.getElementById('menu');

    // open/close the menu when the user clicks on the button
    function toggleMenu() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }

    // close the menu when the user clicks outside of it
    window.onclick = function (event) {
        const dropdownWrapper = document.getElementById('dropdown-wrapper');
        if (
            !dropdownWrapper.contains(event.target) &&
            !menu.classList.contains('hidden')
        ) {
            menu.classList.add('hidden');
        }
    };

    return (
        <div>
            <button
                onClick={toggleMenu()}
                className="px-10 py-3 bg-amber-500 hover:bg-amber-600 focus:bg-rose-500 text-white"
            >
                Subjects
            </button>
            <div
                id="menu"
                className="hidden flex flex-col bg-white drop-shadow-md"
            >
                <a
                    className="px-5 py-3 hover:bg-amber-300 border-b border-gray-200"
                    href="/ind-economy"
                >
                    Indian Economy
                </a>
                <a className="px-5 py-3 hover:bg-amber-300" href="/ibs">
                    Indian Banking System
                </a>
            </div>
        </div>
    );
};

export default DropDown;
