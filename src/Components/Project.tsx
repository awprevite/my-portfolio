import { SquareArrowOutUpRight } from "lucide-react";

type ProjectProps = {
  img: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

function Project( { img, title, description, technologies, link }: ProjectProps ) {
  return (
    <div className='flex flex-col items-start gap-6 rounded-lg shadow-md p-6 w-full bg-gray-500/20'>
      <img src={img} className='rounded-lg'/>
      <p className='text-sm font-bold'>{title}</p>
      <p className='text-xs'>{description}</p>
      <div className='relative pr-8 w-full'>
        <div className='flex flex-wrap gap-2 items-center justify-start'>
          {technologies.map((tech, index) => (
            <div key={index} className='text-xs bg-gray-500/20 px-2 py-1 rounded'>
              {tech}
            </div>
          ))}
        </div>
        <a href={link} target='_blank' rel='noopener noreferrer' className='absolute top-0 right-0 text-blue-500 hover:scale-[1.2] transition-all duration-200'>
          <SquareArrowOutUpRight className='h-6 w-6' />
        </a>
      </div>
    </div>
  )
}

export default Project;