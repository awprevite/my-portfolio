import Menu from './Menu';

function MenuGrid() {
  return(
    <div className='grid grid-cols-[1fr_3fr_3fr_3fr_1fr] gap-1'>
      <div className='bg-gray-600/80'></div>
      <Menu title='Info' img='/Campaign.jpg' ref='#info' />
      <Menu title='Technologies' img='/Campaign.jpg' ref='#technologies' />
      <Menu title='Projects' img='/Campaign.jpg' ref='#projects' />
      <div className='bg-gray-600/80'></div>
    </div>
  )
}

export default MenuGrid;