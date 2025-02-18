import React from 'react'
import { FaGithubSquare,FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'></h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/muzammil-mz"target='_blank'><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/muzammilmd/"target='_blank'><FaLinkedin /></a>
            </div>

        </div>
<div>
<p className='text-gray-400 mt-3 '>@2024 MUZAMMIL Pvt Ltd</p>
</div>
       
        
    </div>
  )
}

export default Footer