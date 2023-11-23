'use client'

import React, { useState } from 'react';
import Modal from '@/app/components/ui/Modal';
import InstagramIcon from '@/public/instagram-icon.png'
import FacebookIcon from '@/public/facebook-icon.png'
import TwitterIcon from '@/public/twitter-icon.png'
import SocialMediaButton from './SocialMediaButton';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className='bg-gray-900 text-white py-4 bottom-0 w-full text-center'>
        <p className='mb-2'>Stay in the know</p>
        <div className='flex justify-center flex-wrap gap-2 mb-2'>
          <button className='underline-link' onClick={() => setShowModal(true)}>Info</button>
          <button className='underline-link' onClick={() => setShowModal(true)}>Privacy Policy</button>
          <button className='underline-link' onClick={() => setShowModal(true)}>Support</button>
        </div>
        <div className='flex justify-center'>
          <SocialMediaButton href='https://www.instagram.com' src={InstagramIcon}/>
          <SocialMediaButton href='https://www.facebook.com' src={FacebookIcon}/>
          <SocialMediaButton href='https://www.twitter.com' src={TwitterIcon}/>
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </footer>
    </>
  )
}

export default Footer
