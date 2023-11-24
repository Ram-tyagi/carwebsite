import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {
  return (
   <header className='w-full flex items-center justify-between'>
    <nav className='flex items-center justify-between'>
    <Link href="/" className='flex items-center gap-2'>
    <Image
    src="/logo.svg"
    alt="car hub Logo"
    width={118}
    height={18}
    className='object-contain'
    />

    </Link>
    <CustomButton
    title="Sign In"
    btnType="button"
    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"

    />
    </nav>
   </header>
  )
}

export default Navbar