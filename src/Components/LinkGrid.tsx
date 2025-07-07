import Link from './Link';
import { Github, Linkedin, Download } from 'lucide-react';

function LinkGrid() {
  return (
    <div className='flex center-items gap-4'>
      <Link
        icon={<Github className='h-6 w-6' />}
        link='https://github.com/awprevite'/>
      <Link
        icon={<Linkedin className='h-6 w-6' />}
        link='https://linkedin.com/in/anthony-previte'
      />
      
    </div>
  )
}

export default LinkGrid;