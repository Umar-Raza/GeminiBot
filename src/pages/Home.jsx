import React, { useState } from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import { SearchInput } from '../components/searchInput/SearchInput';
import { GoogleGenAI } from "@google/genai";
import { IoSend } from "react-icons/io5";
import { Navbar } from '../components/navbar/Navbar';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Home = () => {

    const [isResponsScreen, setIsResponsScreen] = useState(false)
    const [question, setQuestion] = useState("")
    const [allMassages, setAllMassages] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const handleRequest = () => {
        if (question) {
            generateResponse(question)
        } else {
            alert("You must write somthing..!")
        }
    }
    const generateResponse = (msg) => {
        setIsLoading(true)
        let allMassages = []
        const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_APP_GEMkEY });
        async function main() {

            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: msg,
            });
            allMassages.push(
                {
                    type: "userMsg",
                    text: msg

                },
                {
                    type: "responseMsg",
                    text: response.text
                }
            )
            setAllMassages(allMassages)
            setIsResponsScreen(true)
            setIsLoading(false)
            setQuestion("")
            // console.log(response.text);
        }
        main();
    }
    const newChat = () => {
        setIsResponsScreen(false);
        setAllMassages([]); // Clear the messages array
    }
    return (
        <>
            <div className="container w-screen min-h-screen text-white flex flex-col items-center"> {/* Added flex and items-center to the main container */}
                {
                    isResponsScreen ?
                        <div className="h-[80vh] w-full flex flex-col items-center"> {/* Added flex and items-center */}
                            <div className="header flex items-center justify-between w-full pt-[30px] px-4 sm:px-10 md:px-20 lg:px-[140px]">
                                <h2 className=' p-3 rounded-2xl  font-bold text-[#F698AE]'>GeminiBot</h2>
                                <button className='btn btn-soft border-[#F698AE] text-[#F698AE] bg-[#1A2027]' onClick={newChat}>New Chat </button>
                            </div>

                            <div className="massages  flex flex-col items-start w-full pt-[30px] px-4 sm:px-10 md:px-20 lg:px-[140px]">
                                {
                                    allMassages.map((msg, index) => {
                                        return (
                                            <div className={msg.type} key={index}>
                                                {msg.text}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div> :
                        <div className="middle h-[80vh] text-white flex items-center flex-col justify-center w-full"> {/* Added w-full */}
                            <h1 className='text-4xl mb-4'>GeminiBot</h1>
                            <div className="boxes mt-8 flex flex-wrap items-center justify-center gap-4 px-4 sm:px-10 md:px-20 lg:px-0"> {/* Added justify-center */}
                                <div className="card rounded-lg cursor-pointer transition-all  hover:bg-[#1e1e1e]  sm:px-6 relative min-h-[17vh] bg-[#181818] p-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <p className="text-[18px]">what is coding ?<br />
                                        how we can learn it ?
                                    </p>
                                    <i className="absolute right-3 bottom-3 text-[18px]"><IoCodeSlash /></i>
                                </div>
                                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] px-3 sm:px-3 relative min-h-[18vh] bg-[#181818] p-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <p className="text-[18px]">Which is the red<br />Planet of solar system ?
                                    </p>
                                    <i className="absolute right-3 bottom-3 text-[18px]"><BiPlanet /></i>
                                </div>
                                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] px-3 sm:px-3 relative min-h-[18vh] bg-[#181818] p-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                    <p className="text-[18px]">In which year python<br />
                                        was invented ?
                                    </p>
                                    <i className="absolute right-3 bottom-3 text-[18px]"><FaPython /></i>
                                </div>
                                {/* <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] px-3 sm:px-3 relative min-h-[18vh] bg-[#181818] p-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <p className="text-[18px]">How we can use <br /> the AI for adopt ?
                    </p>
                    <i className="absolute right-3 bottom-3 text-[18px]"><TbMessageChatbot />
                    </i>
                </div> */}
                            </div>
                        </div>
                }
                <div className="bottom w-full flex flex-col items-center">
                    <div className="inputBox text-white w-[90%] sm:w-[60%] text-[15px] py-[7px] flex items-center bg-[rgb(24,24,24)] rounded-[30px]">
                        <input type="text" value={question} onChange={(e) => { setQuestion(e.target.value) }} className='p-4 flex-1 bg-transparent outline-0 border-0 :bg-white' placeholder='Write your message here...' id='searchBox' />
                        <button className='mr-3' disabled={isLoading}>
                            {
                                !isLoading ? <i onClick={handleRequest} className='text-[#F698AE] text-[25px] cursor-pointer'><IoSend /></i> : <span className="loading loading-spinner text-[#f58ca4]"></span>
                            }
                        </button>
                    </div>
                    <p className='mt-10 text-center text-[gray] py text-sm sm:text-base'>GeminiBot is developed by <span className=' text-[#F698AE] hover:text-[#f58ca4]' loading="lazy"> <a target='_blank' href="https://mu-portfolio.web.app/">Muhammad Umar</a></span>&#128151; by using the Gemini API.</p>
                </div >
            </div>
        </>
    )
}