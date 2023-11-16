'use client'
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import Modal from './Modal';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
    <footer className="bg-gray-900 text-white py-4 bottom-0 w-full text-center">
      <p className="mb-2">Stay in the know</p>
      <div className="flex justify-center mb-2">
        <button className="mr-2" onClick={() => setShowModal(true)}> Info</button>
        <button className="mr-2 "  onClick={() => setShowModal(true)} >Privacy Policy</button>
        <button className="mr-2 "  onClick={() => setShowModal(true)}>Support</button>
      </div>
      <div className="flex justify-center">
        <a href="#" className="mx-2 rounded-full p-1 bg-gray-900">
          <Image src="/instragram-icon.png" alt="" width={24} height={24} />
        </a>
        <a href="#" className="mx-2 rounded-full p-1 bg-gray-900">
          <Image src="/facebook-icon.png" alt="" width={24} height={24} />
        </a>
        <a href="#" className="mx-2 rounded-full p-1 bg-gray-900">
          <Image src="/twitter-icon.png" alt="" width={24} height={24} />
        </a>
      </div>
      <Modal isVisible = {showModal} onClose= {() => setShowModal(false)}/>         
      </footer>
    </Fragment>
  );
};

export default Footer;
