import React from 'react'

interface TwitterButtonProps {
 url: string
}

const TwitterButton: React.FC<TwitterButtonProps> = ({ url }) => {
 return (
    <a href={url} className='mx-2 rounded-full p-1 bg-gray-900'>
      <img src='/twitter-icon.png' alt='Twitter' width={24} height={24} />
    </a>
 )
}

export default TwitterButton