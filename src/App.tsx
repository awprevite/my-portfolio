import TechnologyGrid from './Components/TechnologyGrid'
import MenuGrid from './Components/MenuGrid'
import Info from './Components/Info'
import ProjectGrid from './Components/ProjectGrid'

function App() {

  return (
    <>
      <div className='relative h-screen flex flex-col items-center justify-center'>
        <img
          src="/Menu.png"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="text-center p-12 relative z-10">
          <h1 className='text-white drop-shadow-[0_0_5px_rgba(0,255,0,0.9)] font-["IBM_Plex_Mono"] text-6xl'>Anthony Previte</h1>
        </div>
        <div className='w-full'>
          <MenuGrid />
        </div>
        <div className='text-center p-12 relative z-10'>
          <div className='w-full p-1 relative' style={{ backgroundImage: 'radial-gradient(circle, rgba(34, 41, 52, 0.8) 0%, rgba(55,65,81,0) 100%)' }}>
            <h1 className='text-white font-["IBM_Plex_Mono"] text-3xl'>Scroll down or choose a section</h1>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute inset-0 bg-[url("/Noise.png")] opacity-100 z-1'></div>
        <div className='relative z-2 flex items-center justify-center p-20'>
          <Info />
        </div>
        <div className='relative z-2 flex items-center justify-center p-20'>
          <TechnologyGrid />
        </div>
        <div className='relative z-2 flex items-center justify-center p-20'>
          <ProjectGrid />
        </div>
      </div>
    </>
  )
}

export default App
