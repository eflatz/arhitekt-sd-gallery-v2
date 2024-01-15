import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function DropdownProfile() {
    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="ml-3 relative">
            <div>
            <button className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" 
                    id="user-menu" 
                    aria-label="User menu" 
                    aria-haspopup="true"
                    onClick={(e) => { setIsOpen(!isOpen) }}>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
            </div>
            {/* <!-- */}
            {/* Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
            <Transition
                show={isOpen}
                enter={"transition ease-out duration-100"}
                enterFrom={"transform opacity-0 scale-95"}
                enterTo={"transform opacity-100 scale-100"}
                leave={"transition ease-in duration-75"}
                leaveFrom={"transform opacity-100 scale-100"}
                leaveTo={"transform opacity-0 scale-95"}>
            {(ref) => (
                <div ref={ref} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div className="py-1 rounded-md bg-white shadow-xs">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>

                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>

                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                    </div>
                </div>
            )}
            </Transition>
        </div>
    )
}