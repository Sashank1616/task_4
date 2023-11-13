import React from 'react'
import { FaAutoprefixer, FaCss3, FaCube, FaDesktop, FaThumbsUp, FaUserPlus } from 'react-icons/fa'

const Services = () => {
  return (
    <div>
      <div className='bg-black text-white text-center py-32 px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '>Services Page</h2>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center mt-16'>
            <h1 className='text-2xl text-bold m-1 text-orange-500'>Our Services</h1>
            <h2 className='text-bold text-5xl m-3 text-center '>What We Offer</h2>
            <p className='text-sm lg:w-1/3 m-5 mt-0 p-2 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ut iusto eum. Reiciendis ipsam mollitia officiis facere consequuntur voluptatibus excepturi!</p>
        </div>
        <div className='grid gap-8 sm:grid-cols-3 grid-col-1 mx-auto  mt-5 p-5 mb-16 lg:mx-20 md:grid-col-3'>
          <div className='border border-gray-500 rounded p-2 shadow-xl'>
          <FaAutoprefixer size={60} className='m-3 text-blue-900  '/>
          <h1 className='text-bold m-2'>Refreshing Design</h1>
          <p className='text-md m-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quidem quos officiis modi voluptate ipsum?</p>
          </div>
          <div className='border border-gray-500 rounded p-2  shadow-xl'>
          <FaCss3 size={60} className='m-3 text-blue-900  '/>
          <h1 className='text-bold m-2'>Refreshing Design</h1>
          <p className='text-md m-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quidem quos officiis modi voluptate ipsum?</p>
          </div>
          <div className='border border-gray-500 rounded p-2 shadow-xl'>
          <FaCube size={60} className='m-3 text-blue-900  '/>
          <h1 className='text-bold m-2'>Refreshing Design</h1>
          <p className='text-md m-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quidem quos officiis modi voluptate ipsum?</p>
          </div>
          <div className='border border-gray-500 rounded p-2 shadow-xl'>
          <FaDesktop size={60} className='m-3 text-blue-900  '/>
          <h1 className='text-bold m-2'>Refreshing Design</h1>
          <p className='text-md m-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quidem quos officiis modi voluptate ipsum?</p>
          </div>
          <div className='border border-gray-500 rounded p-2 shadow-xl'>
          <FaUserPlus size={60} className='m-3 text-blue-900  '/>
          <h1 className='text-bold m-2'>Refreshing Design</h1>
          <p className='text-md m-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quidem quos officiis modi voluptate ipsum?</p>
          </div>
          <div className='border border-gray-500 rounded p-2 shadow-xl'>
          <FaThumbsUp size={60} className='m-3 text-blue-900  '/>
          <h1 className='text-bold m-2'>Refreshing Design</h1>
          <p className='text-md m-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quidem quos officiis modi voluptate ipsum?</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Services
