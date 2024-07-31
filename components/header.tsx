'use client'

import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import Nav from '@/components/nav'
import MobileNav from '@/components/mobileNav'

const Header = () => {
  return (
    <header className='fixed z-50 w-full bg-zinc-950 py-6 xl:py-8'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image
            src='/logo.JPG'
            height={54.53}
            width={41.35}
            className='rounded-full'
            alt='logo'
          />
        </Link>

        {/* disktop nav */}
        <div className='hidden items-center gap-x-8 xl:flex'>
          <Nav />
          <Link
            to='/'
            spy={true}
            smooth={true}
            className='text-md cursor-pointer rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80'
          >
            Hire me
          </Link>
        </div>
        {/* mobile nav */}
        <div className='z-50 xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
