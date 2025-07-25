import { useEffect, useState } from "react";
import { IoDownloadOutline, IoMail } from "react-icons/io5";
import {toast} from 'react-hot-toast'
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom";
import DotTitle from "../components/Dot_Title";

const Home = () => {
  const navigate = useNavigate();
  
  const [copied , setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText("srikanthlomte72@gmail.com"); 
    setCopied(true);
    toast.success("Email Copied")
    setTimeout(() => {
      setCopied(false);
    },1000)
  }

  const confettiHandler = () => {
    toast.success("Resume Downloaded");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }

  //Blinking text animation effect
  const texts = ["Javascript", "ReactJS", "NodeJS", "Express", "PostgreSQL"]
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(()=> {
      setIndex((prev) => (prev + 1) % texts.length);
    },1300);
    return () => clearInterval(intervalId);
  },[])


  return (
    <div className="relative">
    
      {showConfetti && <Realistic autorun={{ speed: 0.3 }} />}
    
      <div className='mx-6 mt-5 flex flex-col-reverse sm:flex-row sm:justify-between items-center'>
        {/* left Part */}
        <div className="w-4/6">
          <div className="flex justify-center sm:justify-start">
            <DotTitle title="Full Stack Developer and Problem Solver"/>
          </div>
          
          <div className="font-[inter] text-white font-semibold">
            <div className="my-6 flex flex-col gap-1"> 
              <h1 className="font-[inter] text-white font-bold text-center sm:text-left text-3xl">I'm Srikanth</h1>
              <p className=" text-[#aba5a5] text-center sm:text-left text-[15px] sm:text-xl leading-relaxed ">
                Hi, I am a MERN Stack Developer with 1 year of experience in building web app. I specialize in {''} 
                <span className="font-bold text-[#d8eef7] bg-[#545151] rounded-lg px-1 py-1 transition-opacity duration-500 ease-in-out">{texts[index]}</span>
              </p>
            </div>

            <div className="flex gap-3 justify-center sm:justify-start">
              <a 
                onClick={confettiHandler}
                href="/SRIKANTH_LOMTE_RESUME.pdf"
                download
                className="px-2 py-1 rounded-lg flex items-center gap-2 cursor-pointer bg-red-600 active:scale-95 transition-transform duration-150"
              >
                Resume<IoDownloadOutline />
              </a>
         
              <button 
                onClick={copyHandler} 
                className="px-2 py-2 rounded-lg flex items-center gap-2 cursor-pointer border border-[#847878] active:scale-95 transition-transform duration-150"
              >
                <IoMail/>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

          </div>
        </div>
        
        {/* Right Part */}
        <div className="mb-2 sm:mb-0">
          <img src="https://res.cloudinary.com/dxxeks4o5/image/upload/v1749978824/my-notion-face-transparent_fzfsuw.png" alt="profile image" className="w-44 h-44 sm:w-48 sm:h-48 transition-transform duration-300 hover:scale-110" />
        </div>
      </div>
      
      {/* Skills */}
      <Skills/>
    
      {/* Projects */}
      <div className="my_container bg-[#2C2C2C] mx-2 my-6 pb-1 rounded-lg">
        {/* dot and button */}
        <div className="flex justify-between items-center px-3">
          <div className="px-3 pt-4">
            <DotTitle title="Selected Projects"/>
          </div>

          <div onClick={() => navigate("/projects")} className='mx-3 mt-4 rounded bg-[#383838] active:scale-95 transition-transform duration-150'>
            <button 
              className='cursor-pointer flex gap-1 items-center px-2 py-2 text-xs font-semibold text-white font-[inter]'>
              View All
              <ArrowRight size={18}/> 
            </button>
          </div>
        </div>
        
        <ProjectCard image="payeasy.png" title="PayEasy 💸" description="Fully functional peer-to-peer money transfer system with user authentication" gitLink="https://github.com/SRIKANTHLOMTE/Payment-App" liveLink="https://payeasy-frontend.vercel.app/"/>
        <ProjectCard image="/sticky.svg" title="Sticky" description="A fun & fast GIF ,Stickers finder where you can explore, search, favorite, and download trending and categorized GIFs in real-time" gitLink="https://github.com/SRIKANTHLOMTE/GiphyApp" liveLink="https://sticky-blond.vercel.app/"/>
        <ProjectCard image="/extension.png" title="AI SUMMARIZER" description="AI Summary for Blogs and Articles - Chrome Extension" gitLink="https://github.com/SRIKANHTLOMTE/AI-summarizer-Extension"/>
      </div>
      
    </div>
  )
}

export default Home


