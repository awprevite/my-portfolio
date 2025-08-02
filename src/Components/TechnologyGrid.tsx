import Technology from './Technology';
import { siTypescript, siReact, siTailwindcss, siPostgresql, siNextdotjs, siSwift, siGit, siFigma, siPython, siSupabase } from 'simple-icons/icons';

function TechnologyGrid() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 id='technologies' className='text-3xl font-bold text-center p-6'>Technologies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:px-6 py-10 w-full justify-items-center">
        <Technology
          icon={siFigma}
          description="Interface Design Tool"
        />
        <Technology
          icon={siTypescript}
          description="Typed Javascript Superset"
        />
        <Technology
          icon={siReact}
          description="Javascript Library"
        />
        <Technology
          icon={siNextdotjs}
          description="React Framework"
          color='white'
        />
        <Technology
          icon={siTailwindcss}
          description="CSS Framework"
        />
        <Technology
          icon={siGit}
          description="Version Control"
        />
        <Technology
          icon={siPostgresql}
          description="Database"
        />
        <Technology
          icon={siPython}
          description="General Purpose Language"
        />
        <Technology
          icon={siSupabase}
          description='Backend as a Service'
        />
        <Technology
          icon={siSwift}
          description="iOS & macOS Development"
        />
      </div>
    </div>
  )
}

export default TechnologyGrid;