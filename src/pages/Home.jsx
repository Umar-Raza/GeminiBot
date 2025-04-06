import React, { useState } from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import { SearchInput } from '../components/searchInput/SearchInput';
import { GoogleGenAI } from "@google/genai";
import { IoSend } from "react-icons/io5";
import { Navbar } from '../components/navbar/Navbar';

export const Home = () => {

    const [isResponsScreen, setIsResponsScreen] = useState(false)
    const [question, setQuestion] = useState("")
    const [allMassages, setAllMassages] = useState(null)
    const handleRequest = () => {
        if (question) {
            generateResponse(question)
        } else {
            alert("You must write somthing..!")
        }
    }
    const generateResponse = (msg) => {
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
            setQuestion("")
            // console.log(response.text);
        }
        main();
    }
    return (
        <>
            <div className="container w-screen min-h-screen">
                {
                    isResponsScreen ?
                        <div className="h-[80vh]">
                            {/* <div className="header flex items-center justify-between w-[100vw] pt-[30px] px-[140px]">
                                <h2 className='bg-[#181818] p-3 rounded-2xl  font-bold  text-[#ef476f]'>GeminiBot</h2>
                                <button className='btn btn-soft  border-[#ef476f] text-[#ef476f]'>New Chat </button>
                            </div> */}
                            <Navbar />
                            <div className="massages flex items-center justify-between w-[100vw] pt-[30px] px-[140px]">
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
                        <div className="middle h-[80vh] flex items-center flex-col justify-center">
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
                }
                <div className="bottom w-[100%]  flex flex-col items-center">
                    <div className="inputBox w-[70%] text-[15px] py-[7px] flex items-center bg-[rgb(24,24,24)] rounded-[30px]">
                        <input type="text" value={question} onChange={(e) => { setQuestion(e.target.value) }} className='p-4 flex-1 bg-transparent outline-0 border-0 active:bg-white' placeholder='Write your message here...' id='searchBox' />
                        {
                            question == "" ? "" : <i onClick={handleRequest} className='text-[#F698AE] text-[25px] mr-6 cursor-pointer'><IoSend /></i>
                        }
                    </div>
                    <p className='mt-10 text-[gray] text-4'>GeminiBot is developed by <span className=' text-[#F698AE] hover:text-[#f58ca4]' loading="lazy"> <a target='_blank' href="https://mu-portfolio.web.app/">Muhammad Umar</a></span>&#128151;. by using the Gemini API for giving the response.</p>
                </div >
            </div>
        </>
    )
}
