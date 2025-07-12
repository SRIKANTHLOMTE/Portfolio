import DotTitle from '../components/Dot_Title';
const About = () => {
  return (
    <div className='mx-5 mt-4'>      
      {/* Title and para */}
      <div className='mb-8'>
        <DotTitle title="About"/>
        <h1 className="font-[inter] font-semibold text-4xl text-white mt-6 mb-4">It's Me Srikanth</h1>
        <p className='font-[inter] text-[#c0c0c0] text-[18px] mb-3 leading-relaxed w-full break-words'>I'm a passionate Software Development Engineer with expertise in building excellent digital experiences. I specialize in frontend development while maintaining a strong foundation in full-stack technologies.</p>
        <p className='font-[inter] text-[#c0c0c0] text-[18px] leading-relaxed w-full break-words'>Beyond coding, I enjoy exploring new technologies, and building projects.</p>
      </div>
      {/* Profile Pic */}
      <div className='flex items-center justify-center mb-8'>
        <img src="22X01A05B2.jpg" alt="srikanth image"/>
      </div>

      {/* Education */}
      <div className='flex flex-col gap-4 mb-6'>
        <DotTitle title="Education"/>
      
        <div className='flex flex-col gap-4 rounded-lg'>
            {/* college */}
            <div className='mx-4 mb-3 border border-[#4d4a4a] rounded-lg px-3 py-3'>
              <div className='flex items-center justify-between'>
                <span className='text-white font-[inter] text-[18px] sm:text-xl'>Narsimha Reddy Engineering College</span>
                <span className='font-[inter] text-[#dbcaca] text-sm sm:text-[18px]'>2022-2026</span>
              </div>

              <span className='italic text-[#dbcaca] text-sm'>(Bachelor of Technology (B.Tech.) in Computer Science)</span>
      
              <ul className='mt-3'>
                <li className='list-disc ml-4 font-[inter] text-[#dbcaca] text-sm sm:text-[18px]'>Comprehensive study of computer science fundamentals</li>
                <li className='list-disc ml-4 font-[inter] text-[#dbcaca] text-sm sm:text-[18px]'>Courese Focused on: Data Structures & Algorithms, Operating Systems, Computer Networks, OOP, SDLC, Databases</li>              </ul>
            </div>
            {/* School */}
            <div className='mx-3 mb-3 border border-[#4d4a4a] rounded-lg px-3 py-3'>
              <div className='flex items-center justify-between'>
                <span className='text-white font-[inter]  text-[18px] sm:text-xl'>SriSai Junior College, Narayanpet</span>
                <span className='font-[inter] text-[#dbcaca] text-sm sm:text-[18px]'>2019 - 2021</span>
              </div>
              <span className='italic text-[#dbcaca] text-sm'>(Higher Secondary Education)</span>
              <ul className='mt-3 list-disc ml-4 font-[inter] text-[#dbcaca] text-sm sm:text-[18px] space-y-1 break-words'>
                <li>Focus on Physics, Chemistry, Mathematics, and Computer Science</li>
                <li>Ranked among top performers in academics and inter-school competitions</li>
              </ul>
            </div>
        </div>
      </div>


      {/* Acheivements */}
      <div className='flex flex-col gap-4'>
        <DotTitle title="Achievements"/>
      
        <div className='mx-3 mb-3 border border-[#4d4a4a] rounded-lg px-3 py-3'>
          <ul className='mt-3 list-disc ml-4 font-[inter] text-[#dbcaca] text-sm sm:text-[18px] space-y-1 break-words'>
            <li>Earned an AI Data Scientist Certification from Arathan Prakash Productivity Council (APPC) and KraftPhat Digital Solutions Pvt. Ltd., showcasing expertise in AI and data science.</li>
            <li>Successfully completed another AI Data Science certification from KraftPhat Digital Solutions Pvt. Ltd., issued in May 2025, demonstrating continued dedication to advancing technical skills.</li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default About