'use client'


import React, { useState } from 'react'
import Modal from '@/app/components/ui/Modal'
import FacebookButton from './facebook-button' 
import InstagramButton from './instagram-button' 
import TwitterButton from './twitter-button' 


const Footer = () => {
 const [showModal, setShowModal] = useState(false)

 return (
    <>
      <footer className='bg-gray-900 text-white py-4 fixed bottom-0 w-full text-center'>
        <p className='mb-2'>Stay in the know</p>
        <div className='flex justify-center mb-2'>
          <button className='mr-2' onClick={() => setShowModal(true)}> Info</button>
          <button className='mr-2 ' onClick={() => setShowModal(true)}>Privacy Policy</button>
          <button className='mr-2 ' onClick={() => setShowModal(true)}>Support</button>
        </div>
        <div className='flex justify-center'>
          <InstagramButton url='https://www.instagram.com/' /> 
          <FacebookButton url='https://www.facebook.com/' /> 
          <TwitterButton url='https://www.twitter.com/' /> 
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </footer>
    </>
 )
}

export default Footer