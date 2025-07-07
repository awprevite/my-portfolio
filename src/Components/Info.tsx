import LinkGrid from './LinkGrid';
import { Pin, Mail, Download } from 'lucide-react';

function Info() {
  return (
    <div id='info' className='flex flex-col items-center'>
      <div className='flex items-center gap-8 p-4'>
        <div className='flex flex-col items-left justify-center gap-4 p-4'>
          <div className='flex align-items-left gap-2 p-2'>
            <Pin className='h-6 w-6' />
            <p>Andover, MA</p>
          </div>
          <div className='flex justify-left gap-2 p-2'>
            <Mail className='h-6 w-6' />
            <p>awprevite@gmail.com</p>
          </div>
          <a href='../Public/Anthony Previte Resume.pdf' download='Anthony Previte Resume.pdf' className='flex justify-left gap-2 p-2'>
            <Download className='h-6 w-6' />
            <p>Download Resume</p>
          </a>
          <LinkGrid />
        </div>
        <div>
          <img src='/Anthony Previte Headshot.jpeg' className='rounded-full'/>
        </div>
      </div>
      <p>Quick Description here, full stack developer ...</p>
    </div>
  )
}

export default Info;