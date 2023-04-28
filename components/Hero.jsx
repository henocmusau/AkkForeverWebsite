import React from 'react'
import Image from 'next/image'

import { akk } from '../assets'

export default function Hero() {

  return (
    <>
      <section
        className='max-w-screen-lg w-full min-h-[400px] bg-cover  mx-auto relative flex flex-col items-center justify-center'
        style={{
          background: `url(${akk.src}) no-repeat center`,
          backgroundSize: 'cover',
          borderRadius: '0 0 15px 15px'

        }}
      >
        <article className='absolute bottom-0 pb-3 pt-10 w-full flex flex-col items-center justify-center'
          style={{
            background: 'linear-gradient(to bottom, transparent, magenta)',
            borderRadius: '0 0 15px 15px'
          }}
        >
          <h2
            className='text-2xl md:text-3xl w-full text-center text-white font-bold '
          >L'Appel inattendu du Président américain Joe Biden à Athys Kabongo Joe Biden à Athys Kabong</h2>
          <p
            className="text-gray-300 text-center md:text-left text-sm"
          >22/12/2023</p>
        </article>
      </section>
    </>
  )
}
