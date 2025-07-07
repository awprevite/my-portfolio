type ProjectProps = {
  img: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

function Project( { img, title, description, technologies, link }: ProjectProps ) {
  return (
    <div className='flex flex-col items-center gap-4 rounded-lg shadow-md px-6 py-2 max-w-xs bg-gray-500/20 hover:scale-[1.02] transition-all duration-200'>
      <p className='text-sm font-bold'>{title}</p>
      <img src={img} alt={title} className='w-full h-48' />
      <p className='text-xs'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((tech, index) => (
          <span key={index} className='text-xs bg-gray-700/20 px-2 py-1 rounded'>
            {tech}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline mt-2'>
        View Project
      </a>
    </div>
  )
}

export default Project;