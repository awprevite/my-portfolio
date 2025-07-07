import React from 'react';

type LinkProps = {
  icon: React.ReactNode;
  link: string;
}

function Link( { icon, link }: LinkProps ) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='flex items-center rounded-lg shadow-md px-6 py-2 max-w-xs bg-gray-500/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer'>
      <div className='flex rounded-lg p-2 bg-gray-500/20'>
        <div>{icon}</div>
      </div>
    </a>
  )
}

export default Link;