import React from 'react'
import u1 from '../assets/about.png'
import user1 from '../assets/user-01.png'
import user2 from '../assets/user-02.png'
import user3 from '../assets/user-03.png'
import { FaFileAlt } from 'react-icons/fa'
const About = () => {
  return (
    <div>
      <div className='bg-black text-white text-center py-32 px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '>About Us Page</h2>
      </div>
      <div className='flex lg:flex-row flex-col items-center justify-between mx-auto p-5 m-5'>
        <div className='m-5'>
          <img src={u1} className='object-cover m-2' alt="" />
        </div>
        <div className='flex flex-col p-5' >
          <h1 className='text-2xl text-bold m-3 text-orange-500'>Who We are</h1>
          <h2 className='text-bold text-5xl m-3 '>We provide high quality Articles & blogs</h2>
          <p className='text-sm  m-3 mt-0 p-2 '> lorem24Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ut iusto eum. Reiciendis ipsam mollitia officiis facere consequuntur voluptatibus excepturi!</p>
          <p className='text-sm  m-3 mt-0 p-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illum. Sed aliquid tempora suscipit porro sunt, adipisci expedita reprehenderit, eum assumenda ex doloribus maxime.</p>
        </div>
        <div>
        </div>
      </div>
      <h1 className='text-bold text-5xl text-center mb-5'>Top Authors</h1>




      <div className='flex flex-wrap mx-auto items-center justify-center mt-10 p-5 mb-10'>
        <div className='border border-gray-500 flex flex-col justify-center items-center rounded-xl m-5 p-2 shadow-xl'>
          <img src={user1} alt="" />
          <h1 className='text-bold m-2'>Adiro Devid</h1>
          <h1 className='text-bold '>Director of Operations</h1>
          <div className='flex flex-row m-2 '>
            <FaFileAlt size={20} className='mx-2' />
            <p className='text-md '> 12 Articles Published</p>
          </div>
        </div>

        <div className='border flex items-center justify-center flex-col border-gray-500 rounded-xl m-5 px-2 pt-1 shadow-xl'>
          <img src={user2} alt="" />
          <h1 className='text-bold m-2'>Rayna Mario</h1>
          <h1 className='text-bold '>Content Writter</h1>
          <div className='flex flex-row m-2'>
            <FaFileAlt size={20} className='mx-2' />
            <p className='text-md '>8 Articles Published</p>
          </div>
        </div>

        <div className='border border-gray-500 flex flex-col justify-center items-center rounded-xl m-5 p-2 shadow-xl'>
          <img src={user3} alt="" />
          <h1 className='text-bold m-2'>Adiro Devid</h1>
          <h1 className='text-bold '>Director of Operations</h1>
          <div className='flex flex-row m-2 '>
            <FaFileAlt size={20} className='mx-2' />
            <p className='text-md '> 12 Articles Published</p>
          </div>
        </div>

        <div className='border border-gray-500 flex flex-col justify-center items-center rounded-xl m-5 p-2 shadow-xl'>
          <img src={user1} alt="" />
          <h1 className='text-bold m-2'>Adiro Devid</h1>
          <h1 className='text-bold '>Director of Operations</h1>
          <div className='flex flex-row m-2 '>
            <FaFileAlt size={20} className='mx-2' />
            <p className='text-md '> 12 Articles Published</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default About
