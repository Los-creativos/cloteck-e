import React from 'react'

interface InstagramButtonProps {
 url: string
}

const InstagramButton: React.FC<InstagramButtonProps> = ({ url }) => {
 return (
    <a href={url} className='mx-2 rounded-full p-1 bg-gray-900'>
      <img src='/instagram-icon.png' alt='Instagram' width={24} height={24} />
    </a>
 )
}

export default InstagramButton