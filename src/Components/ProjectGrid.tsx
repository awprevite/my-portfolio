import Project from './Project';

function ProjectGrid() {
  return (
    <div id='projects' className='grid grid-cols-2 gap-4 px-6 py-10 w-3/4 justify-items-center'>
      <Project 
        img='/Campaign.jpg'
        title='Title'
        description='Description'
        technologies={['React', 'TypeScript', 'Tailwind CSS']}
        link='https.google.com'
      />
      <Project 
        img='/Campaign.jpg'
        title='Title'
        description='Description'
        technologies={['React', 'TypeScript', 'Tailwind CSS']}
        link='https.google.com'
      />
      <Project 
        img='/Campaign.jpg'
        title='Title'
        description='Description'
        technologies={['React', 'TypeScript', 'Tailwind CSS']}
        link='https.google.com'
      />
    </div>
  )
}

export default ProjectGrid;