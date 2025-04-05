import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { GoogleGenAI } from "@google/genai";

export const SearchInput = () => {

    const [question, setQuestion] = useState("")
    const handleRequest = () => {
        if (question) {
            generateResponse(question)
        } else {
            alert("you must write somthing...!")
        }
    }
    const generateResponse = (msg) => {
        const ai = new GoogleGenAI({ apiKey: "AIzaSyAzDRaBem-CLVrH7I1qtA1Ml4xknQfKAE0" });
        async function main() {
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: msg,
            });
            console.log(response.text);
        }

        main();
    }

    return (
        // <>
        <div className="bottom w-[100%]  flex flex-col items-center">
            <div className="inputBox w-[70%] text-[15px] py-[7px] flex items-center bg-[rgb(24,24,24)] rounded-[30px]">
                <input  type="text" value={question}  onChange={(e) => { setQuestion(e.target.value) }} className='p-4 flex-1 bg-transparent outline-0 border-0 ' placeholder='Write your message here...' id='searchBox' />
                {
                    question == "" ? "" : <i onClick={handleRequest} className='text-[#ef476f] text-[25px] mr-6 cursor-pointer'><IoSend /></i>
                }
            </div>
            <p className='mt-10 text-[gray] text-4'>GeminiBot is developed by <span className=' text-[#ef746f] hover:text-[#f5a5b8] '> <a target='_blank' href="https://mu-portfolio.web.app/">Muhammad Umar</a></span>&#128151;. by using the Gemini API for giving the response.</p>
        </div >
    )
}
