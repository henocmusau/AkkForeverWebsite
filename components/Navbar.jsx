import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='container max-w-screen-lg mx-auto flex justify-between '>
            <strong>
                <Link href='/'>BRAND</Link>
            </strong>
            <nav>Navbar</nav>
        </div>
    )
}
