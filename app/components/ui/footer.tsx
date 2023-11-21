'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '@/app/components/ui/Modal';
import InstagramButton from '../instagram-button';
import FacebookButton from '../facebook-button';
import TwitterButton from '../twitter-button';

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
        <div className='flex justify-center gap-2'>
          <InstagramButton url='https://www.instagram.com/' /> 
          <FacebookButton url='https://www.facebook.com/' /> 
          <TwitterButton url='https://www.twitter.com/' /> 
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </footer>
    </>
  );
};

export default Footer;
