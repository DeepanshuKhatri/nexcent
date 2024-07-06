import React from 'react'
import client1 from '@/assets/client1.svg'
import client2 from '@/assets/client2.svg'
import client3 from '@/assets/client3.svg'
import client4 from '@/assets/client4.svg'
import client5 from '@/assets/client5.svg'
import client6 from '@/assets/client6.svg'
import client7 from '@/assets/client7.svg'
import Image from 'next/image'

const Clients = () => {

  return (
    <div className='flex flex-col justify-center pt-[40px] text-center bg-primary px-[10%]'>
        <h1 className='text-[36px] font-semibold text-primary leading-[44px]'>Our Clients</h1>
        <p className='text-secondary-gray'>We have been working with some Fortune 500+ clients</p>
        <div className="flex justify-between  py-7">
            <Image src={client1} height={48} width={48} alt='clients' />
            <Image src={client2} height={48} width={48} alt='clients' />
            <Image src={client3} height={48} width={48} alt='clients' />
            <Image src={client4} height={48} width={48} alt='clients' />
            <Image src={client5} height={48} width={48} alt='clients' />
            <Image src={client6} height={48} width={48} alt='clients' />
            <Image src={client7} height={48} width={48} alt='clients' />
        </div>


    </div>
  )
}

export default Clients