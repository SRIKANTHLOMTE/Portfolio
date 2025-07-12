import DotTitle from "../components/Dot_Title"
import DetailedProjectCard from "../components/DetailedProjectCard"

const ProjectsPage = () => {
  return (
    <div className="mx-2 mt-4">
      <div className="mx-4">
        <DotTitle title="Projects"/>
        <h1 className="font-[inter] font-semibold text-[30px] text-white mt-6 mb-4">My Works</h1>
      </div>
      
      
      <div className="my_container bg-[#2C2C2C] mx-2 my-6 py-1 rounded-lg">
        <DetailedProjectCard 
          logoImg="payeasy.png" 
          websiteImg="PAYEASY_web.png"
          title="PayEasy 💸" 
          gitLink="https://github.com/SRIKANTHLOMTE/Payment-App" 
          liveLink="https://payeay-frontend.vercel.app/"
          techStack={['ReactJS', 'Tailwind', 'Node', 'Express', 'MongoDB', 'Zod', 'Context API']}
          description={[
            "A secure full stack payment system using JWT authentication and MongoDB transactions to simulate real-time digital pyments",
            "Integrated Local Storage for GIF Saving, with Like, Share, and Download functionality, to Improve Session Retention",
          ]}  
        />
        <DetailedProjectCard 
          logoImg="sticky.svg" 
          websiteImg="STICKY_web.png"
          title="Sticky" 
          gitLink="https://github.com/SRIKANTHLOMTE/GiphyApp" 
          liveLink="https://sticy-blond.vercel.app/"
          techStack={['ReactJS', 'Tailwind', 'Giphy API', 'Context API', 'Vite']}
          description={[
            "A real-time GIF search with support for trending categories, stickers, and texts using Giphy API.",
            "User can download, Share and Favourite Gifs and stickers",
            "Implemented a responsive user dashboard that offers real-time balance updates, wallet top-up functionality, and advanced user search and profile management.",
          ]} 
        />

        <DetailedProjectCard 
          logoImg="extension.png"
          websiteImg="AI_web.png"
          title="AI SUMMARIZER" 
          gitLink="https://github.com/SRIKANTHLOMTE/AI-summarizer-Extension" 
          techStack={['ReactJS', 'Tailwind', 'Gemini Pro', 'Chrome Storage']}
          description={[
            "Built an AI-powered fully functional Chrome Extension using React (Vite) and TailwindCSS to summarize any webpage content instantly.",
            "Integrated Gemini Pro API to generate intelligent summaries in three formats: Brief summary, Detailed explanation, Bullet points",
            "Created a custom Options Page for storing and managing the Gemini API key securely via Chrome Storage API.",
            "Used Chrome local storage to persist API keys and user preferences across sessions."
          ]} 
        />
        <DetailedProjectCard 
          logoImg="escape.png"
          websiteImg="ESCAPE_web.png"
          title="Landing Page - SaaS" 
          gitLink="https://github.com/SRIKANTHLOMTE/Escape" 
          liveLink="https://SRIKANTHLOMTE.github.io/Escape/"
          techStack={['HTML', 'Tailwind', 'Javascript']}
          description={[
            "Responsive Landing Page built using HTML, TailwindCSS, and Vanilla JavaScript, mimicking the official ToDesktop aesthetic with pixel-perfect precision.",
            "Optimized for all devices – mobile-first design.",
            " Integrated interactive features like dynamic navbar, scroll-based animations, and responsive layout.",
          ]} 
        />
        <DetailedProjectCard 
          logoImg="camera.png" 
          websiteImg="CAMARA_web.png"
          title="WebCam Fun" 
          gitLink="https://github.com/SRIKANTHLOMTE/JS-Project6" 
          liveLink="https://SRIKANTHLOMTE.github.io/JS-Project6/"
          techStack={['HTML', 'Tailwind', 'Javascript', 'Web API', 'HTML5 Canvas']}
          description={[
            "Developed a webcam-based image filter and screenshot application using HTML5, JavaScript, and TailwindCSS.",
            "Integrated the MediaDevices API to access the user's webcam and stream real-time video to a <video> element.",
            "Implemented real-time canvas rendering by drawing video frames onto an HTML5 <canvas> element using drawImage()."
          ]}
        />
        <DetailedProjectCard 
          logoImg="paint-brush.png" 
          websiteImg="PAINT_web.png"
          title="Free Hand" 
          gitLink="https://github.com/SRIKANTHLOMTE/JS-Project5" 
          liveLink="https://SRIKANTHLOMTE.github.io/JS-Project5/"
          techStack={['HTML', 'Tailwind', 'Javascript', 'HTML5 Canvas']}
          description={[
            "Implemented a dynamic drawing interface with real-time mouse tracking and smooth line rendering using the <canvas> API.",
            "Developed a “Magic Mode” feature using HSL color shifting to create animated rainbow strokes. Added 'Erase Mode' and 'Reset' button functionality.",
            "Utilized canvas context APIs (beginPath, moveTo, lineTo, stroke) to render smooth freehand lines."
          ]}
        />
      </div>

    </div>
  )
}

export default ProjectsPage
