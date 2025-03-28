import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
export const SearchInput = () => {
    return (
        // <>
        <div className="bottom w-[100%]  flex flex-col items-center">
            <div className="inputBox w-[70%] text-[15px] py-[7px] flex items-center bg-[#181818] rounded-[30px]">
                <input type="text" className='p-4 flex-1 bg-transparent outline-0 border-0 ' placeholder='Write your message here...' id='searchBox' />
                {/* <i className='font-15'><LuSendHorizontal /></i> */}
            </div>
            <p>AssistMe is developed by Mo. Mahdi Farooqui. this AI use the gemini API for giving the response</p>

            {/* <div className="flex flex-1 items-center border border-gray-200 rounded-l-sm hover:border-blue-400 focus-within:border-blue-400">
                <input
                type="text"
                name="search"
                placeholder="Search"
                className="w- py-2 px-4 text-base outline-none bg-transparent"
                defaultValue=""
                />
                </div>
                <button
                type="submit"
                className="h-full px-6 py-2 bg-slate-500 border border-l-0 border-gray-200 rounded-r-sm hover:bg-gray-200"
                aria-label="Search"
                >
                <LuSendHorizontal />
            </button> */}
            {/* // </> */}
        </div >
    )
}
