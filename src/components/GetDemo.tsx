import React from 'react'
import { Button } from './ui/button'

const GetDemo = () => {
  return (
    <div className='bg-secondary  flex flex-col text-[#263238] dark:text-white gap-5 justify-center items-center py-[32px] text-center'>
        <h1 className='font-semibold leading-[76px]  text-[48px] md:text-[64px]'>Pellentesque suscipit  <br />fringilla libero eu.</h1>
        <Button>Get a Demo <span className='text-lg'> &nbsp; →</span></Button>
    </div>
  )
}

export default GetDemo