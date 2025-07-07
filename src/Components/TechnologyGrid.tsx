import Technology from './Technology';
import { siTypescript, siReact, siTailwindcss, siMysql, siNextdotjs } from 'simple-icons/icons';

function TechnologyGrid() {
  return (
    <div id='technologies' className="grid grid-cols-3 gap-4 px-6 py-10 max-w-6xl min-w-full mx-auto">
      <Technology
        icon={siTypescript}
        description="Javascript, but better"
      />
      <Technology
        icon={siReact}
        description="Framework"
      />
      <Technology
        icon={siTailwindcss}
        description="Styling"
      />
      <Technology
        icon={siMysql}
        description="Database"
      />
      <Technology
        icon={siNextdotjs}
        description="Framework"
        color='white'
      />
    </div>
  )
}

export default TechnologyGrid;