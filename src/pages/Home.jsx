import React from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import { SearchInput } from '../components/searchInput/SearchInput';

export const Home = () => {
    return (
        <div className="container w-screen">
            <div className="middle h-[70vh] flex items-center flex-col justify-center">
                <h1 className='text-4xl'>GeminiBot</h1>
                <div className="boxes mt-8 flex items-center gap-4">
                    <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] px-6 relative min-h-[17vh] bg-[#181818] p-[10px]">
                        <p className="text-[18px]">what is coding ?<br />
                            how we can learn it ?
                        </p>
                        <i className="absolute right-3 bottom-3 text-[18px]"><IoCodeSlash /></i>
                    </div>
                    <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] px-3 relative min-h-[18vh] bg-[#181818] p-[10px]">
                        <p className="text-[18px]">Which is the red<br />Planet of solar system ?
                        </p>
                        <i className="absolute right-3 bottom-3 text-[18px]"><BiPlanet /></i>
                    </div>
                    <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] px-3 relative min-h-[18vh] bg-[#181818] p-[10px]">
                        <p className="text-[18px]">In which year python<br />
                            was invented ?
                        </p>
                        <i className="absolute right-3 bottom-3 text-[18px]"><FaPython /></i>
                    </div>
                    <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] px-3 relative min-h-[18vh] bg-[#181818] p-[10px]">
                        <p className="text-[18px]">How we can use <br /> the AI for adopt ?
                        </p>
                        <i className="absolute right-3 bottom-3 text-[18px]"><TbMessageChatbot />
                        </i>
                    </div>
                </div>
            </div>
            <div className="bottom w-[100%]  flex flex-col items-center">
                {/* <div className="inputBox w-[70%] text-[15px] py-[7px] flex items-center bg-[#181818] rounded-[30px]">
                    <input type="text" className='p-4 flex-1 bg-transparent outline-0 border-0 ' placeholder='Write your message here...' id='searchBox' />
                    <LuSendHorizontal />
                </div> */}

                <SearchInput />
            </div>
        </div>
    )
}
