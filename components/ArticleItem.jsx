import React from 'react'
import Image from 'next/image'
import { akk } from '@/assets'

export default function ArticleItem({ imgSrc, title }) {

    return (
        <>
            <article
                className='max-w-screen-lg w-full min-h-[400px] bg-cover relative mx-auto relative flex flex-col items-center justify-center'
            // style={{
            //   background: `url(${akk.src}) no-repeat center`,
            //   backgroundSize: 'cover',
            //   borderRadius: '0 0 15px 15px'
            // }}
            >
                <Image src={akk} />
                <h2>Title de l'article</h2>
            </article>
        </>
    )
}
