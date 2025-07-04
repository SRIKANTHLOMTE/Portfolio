import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import DotTitle from "./Dot_Title";


const Footer = () => {
  return (
    <div className='my_container bg-[#212121] border border-[#353434] mb-3 rounded-xl'>
      
      <div className="mx-2 mt-4 rounded-xl flex justify-between items-center">
        <div className="mx-3">
          <DotTitle title="Follow Me"/>
        </div>
        
        <div className='flex items-center gap-3 text-white mx-3'>
          <a 
            href="https://x.com/Srikanth_lomte" 
            target='blank' 
            className="bg-black px-2 py-2 rounded-full hover:-translate-y-1 transition-transform ease-linear"
          >
            <FaXTwitter className="w-[18px] h-[18px] sm:w-6 sm:h-6"/>
          </a>
          <a 
            href="https://github.com/SRIKANTHLOMTE" 
            target='blank'
            className="bg-black px-2 py-2 rounded-full hover:-translate-y-1 transition-transform ease-linear"
          >
            <FiGithub className="w-[18px] h-[18px] sm:w-6 sm:h-6"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/srikanth-lomte-6a9974223/" 
            target='blank'
            className="bg-black px-2 py-2 rounded-full hover:-translate-y-1 transition-transform ease-linear"
          >
            <FaLinkedinIn className="w-[18px] h-[18px] sm:w-6 sm:h-6"/>
          </a>
        </div>
      </div>
      
      <div className="mt-4 mb-3">
        <p class="text-sm sm:text-[17px] text-gray-500 text-center font-[inter]">Made with ❤️ and 🍵</p>
        <p class="text-sm sm:text-[17px] text-gray-500 text-center font-[inter]">© 2025 Srikanth Lomte. All rights reserved.</p> 
      </div>
    </div>
  )
}

export default Footer