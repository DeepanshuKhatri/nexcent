import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import logo from '@/assets/logo.svg'

const Navbar = () => {
    const pages = [
        {
            label:"Home",
            ref:"#",
        },
        {
            label:"Service",
            ref:"#",
        },
        {
            label:"Feature",
            ref:"#",
        },
        {
            label:"Product",
            ref:"#",
        },
        {
            label:"Testimonial",
            ref:"#",
        },
        {
            label:"FAQ",
            ref:"#",
        },
    ]
  return (
    <div className='flex h-[70px] w-full justify-between bg-secondary px-[10%] items-center '>
        <div className='flex gap-1 '>
            <Image alt='logo' src={logo} width={20} height={20}/>
            <div className="text-xl">Nexcent</div>
        </div>
        <div className='flex gap-16 text-sm'>
            {
                pages?.map((page)=>{
                    return (
                        <Link href={page.ref}>{page.label}</Link>
                    )
                })
            }
        </div>
        <div className='flex gap-10'>
            <Button className='text-sm ' variant="ghost">Login</Button>
            <Button className='text-sm'>Sign Up</Button>
        </div>
    </div>
  )
}

export default Navbar