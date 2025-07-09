import LinkGrid from './LinkGrid';
import { Pin, Mail, Download } from 'lucide-react';

function Info() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 id='info' className='text-3xl font-bold text-center p-6'>Info</h1>

      <div className='flex flex-col items-center'>
        <div className='flex items-stretch gap-8 p-4'>

          <div className='flex flex-col items-left justify-center gap-4 p-4 bg-gray-500/20 rounded-lg shadow-md w-full'>
            <p className='text-2xl font-bold'>Anthony Previte</p>
            <p>Full stack web developer</p>
            <div className='flex align-items-left gap-2 p-2'>
              <Pin className='h-6 w-6' />
              <p>Andover, MA</p>
            </div>
            <div className='flex justify-left gap-2 p-2'>
              <Mail className='h-6 w-6' />
              <p>awprevite@gmail.com</p>
            </div>
            <a href='../Public/Anthony Previte Resume.pdf' download='Anthony Previte Resume.pdf' className='block w-full text-center hover:scale-[1.02] transition-all duration-200 cursor-pointer'>
              <div className='flex w-full items-center gap-2 rounded-lg p-2 bg-gray-500/20'>
                <Download className='h-6 w-6' />
                <p>Download Resume</p>
              </div>
            </a>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 p-4 bg-gray-500/20 rounded-lg shadow-md w-full'>
            <img src='/Anthony Previte Headshot.jpeg' className='rounded-full'/>
            <LinkGrid />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;