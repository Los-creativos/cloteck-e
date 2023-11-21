import React from 'react'

interface FacebookButtonProps {
 url: string
}

const FacebookButton: React.FC<FacebookButtonProps> = ({ url }) => {
 return (
    <a href={url} className='mx-2 rounded-full p-1 bg-gray-900'>
      <img src='/facebook-icon.png' alt='Facebook' width={24} height={24} />
    </a>
 )
}

export default FacebookButton