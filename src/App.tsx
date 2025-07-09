import TechnologyGrid from './Components/TechnologyGrid'
import MenuGrid from './Components/MenuGrid'
import Info from './Components/Info'
import ProjectGrid from './Components/ProjectGrid'
import './index.css'

function App() {

  return (
    <>
      <div className='relative flex flex-col h-screen items-center justify-center'>
        <video autoPlay muted playsInline className='absolute inset-0 w-full h-full object-cover z-0'>
          <source src='/Smoke.mp4' type='video/mp4' />
        </video>

        <div className='text-center p-12 relative z-10'>
          <h1 className='text-white drop-shadow-[0_0_5px_rgba(0,255,0,0.9)] font-["IBM_Plex_Mono"] text-6xl'>Anthony Previte</h1>
        </div>

        <div className='w-full'>
          <MenuGrid />
        </div>

        <div className='text-center p-12 relative z-10'>
          <div className='w-full p-1 relative' style={{ backgroundImage: 'radial-gradient(circle, rgba(34, 41, 52, 0.7) 0%, rgba(34, 41, 52, 0) 100%)' }}>
            <h1 className='text-white font-["IBM_Plex_Mono"] text-3xl px-24'>Scroll down or choose a section</h1>
          </div>
        </div>
        
      </div>

      <div className='relative px-30'>
        <div className='absolute inset-0 bg-[url("/Noise.png")] opacity-100 z-1'></div>

        <div className='relative z-2 flex items-center justify-center p-10'>
          <Info />
        </div>

        <div className='relative z-2 flex items-center justify-center p-10'>
          <TechnologyGrid />
        </div>

        <div className='relative z-2 flex items-center justify-center p-10'>
          <ProjectGrid />
        </div>

      </div>
    </>
  )
}

export default App
