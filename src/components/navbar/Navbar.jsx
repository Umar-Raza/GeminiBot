import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar navbar-center px-[130px] mt-0 text-primary-content">
            <div className="navbar-start">
                <h2 className=" text-xl font-bold text-[#F698AE]">GeminiBot</h2>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline text-[#F698AE] hover:border-[#F699AE] bg-[#1D232A]">New chat</button>
            </div>
        </div>
    )
}
