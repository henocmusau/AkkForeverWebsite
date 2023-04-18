import React from 'react'
import Image from 'next/image'

import akk from '../assets/akk.jpg'

export default function Hero() {
  return (
    <>
      <section
        className='max-w-screen-lg w-full min-h-[400px] mx-auto relative flex flex-col items-center justify-center'
        style={{
          background: `linear-gradient(to bottom, transparent 70%, red), url(${akk.src}) no-repeat center`,
          borderRadius: '0 0 15px 15px',
          backgroundSize: 'cover'
        }}
      >
        <header className='absolute bottom-3'>
          <h2
            className='text-2xl md:text-3xl w-full text-center text-white font-bold '
          >L'Appel inattendu du Président américain Joe Biden à Athys Kabongo </h2>
          <p className="text-gray-300 text-center md:text-left text-sm">22/12/2023</p>
        </header>
      </section>
    </>
  )
}
