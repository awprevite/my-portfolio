import Icon from './Icon';
import type { SimpleIcon } from 'simple-icons';

type TechnologyProps = {
  icon: SimpleIcon;
  description: string;
  color?: string;
};

function Technology( { icon, description, color }: TechnologyProps ) {

  return(
    <div className='flex items-center gap-6 rounded-lg shadow-md px-6 py-2 w-full bg-gray-500/20 hover:scale-[1.02] transition-all duration-200'>
      <div className='flex rounded-lg p-2' style={{ backgroundColor: `#${icon.hex}20` }}>
        <Icon icon={icon} color={color || `#${icon.hex}`} />
      </div>
      <div className='flex flex-col'>
        <p className='text-sm font-bold'>{icon.title}</p>
        <p className='text-xs'>{description}</p>
      </div>
    </div>
  )

}

export default Technology;