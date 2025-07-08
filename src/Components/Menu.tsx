type MenuProps = {
  title: string;
  img: string;
  ref: string;
}

function Menu( { title, img, ref}: MenuProps ) {
  return (
    <a href={ref} className='relative flex flex-col items-center object-cover group opcacity-50'>
      <div className='bg-gray-600/70 w-full text-center'>
        <p className='font-["IBM_Plex_Mono"]'>{title}</p>
      </div>
      <div className='flex justify-center w-full overflow-hidden'>
        <img src={img} className="w-full h-full object-cover"/>
        <div className='absolute inset-0 bg-[url("/Noise.png")] opacity-100 z-10'></div>
        <div className="absolute inset-0 bg-gray-600/50 opacity-100 group-hover:opacity-0 transition duration-400"></div>
      </div>
      <div className='bg-gray-600/70 w-full text-center'>
        <p>&nbsp;</p>
      </div>
    </a>
  )
}

export default Menu;