import Menu from './Menu';

function MenuGrid() {
  return(
    <div className='grid grid-cols-[1fr_3fr_3fr_3fr_1fr] gap-1'>
      <div className='relative'>
        <div className='absolute inset-0 bg-[url("/Noise.png")] opacity-100 z-10'></div>
        <div className="absolute inset-0 bg-gray-600/80 opacity-100"></div>
      </div>
      <Menu title='Info' img='/Info.png' ref='#info' />
      <Menu title='Technologies' img='/Technology.png' ref='#technologies' />
      <Menu title='Projects' img='/Projects.png' ref='#projects' />
      <div className='relative'>
        <div className='absolute inset-0 bg-[url("/Noise.png")] opacity-100 z-10'></div>
        <div className="absolute inset-0 bg-gray-600/80 opacity-100"></div>
      </div>
    </div>
  )
}

export default MenuGrid;