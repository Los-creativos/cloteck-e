'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from './ui/Modal';

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
          <a href="#">
            <Image src='/icon-ig.png' alt='Instagram' width={24} height={24} />
          </a>
          <a href="#">
            <Image src='/facebook-icon.png' alt='Facebook' width={24} height={24} />
          </a>
          <a href="#">
            <Image src='/twitter-icon.png' alt='Twitter' width={24} height={24} />
          </a>
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </footer>
    </>
  );
};

export default Footer;
