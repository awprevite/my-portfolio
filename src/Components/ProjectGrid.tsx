import Project from './Project';

function ProjectGrid() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 id='projects' className='text-3xl font-bold text-center p-6'>Projects</h1>
      <div className='grid grid-cols-2 gap-4 px-6 py-10 w-3/4 justify-items-center'>
        <Project 
          img='/Jerseys.png'
          title='Hockey Jersey Collection'
          description='Dynamic e-commerce style website for storing and displaying a personal collection of hockey jerseys'
          technologies={['Typescript', 'React', 'Next.js', 'PostgreSQL', 'Supabase']}
          link='https://jerseys-ten.vercel.app/'
        />
        <Project 
          img='/CoolRoutes.png'
          title='Cool Routes'
          description='Mobile pedestrian navigation app that provides thermally comfortable walking routes throughout Worcester, MA'
          technologies={['Javascript', 'React', 'Next.js', 'Python', 'Flask']}
          link='https://cool-routes.vercel.app'
        />
        <Project 
          img='/ChipCountPoker.png'
          title='Chip Count Poker'
          description='Simple and reliable poker profit tracker with persistent data storage via Core Data'
          technologies={['Swift']}
          link='https://apps.apple.com/us/app/chip-count-poker/id6746974381'
        />
      </div>
    </div>
  )
}

export default ProjectGrid;