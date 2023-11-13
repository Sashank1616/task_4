import React from 'react'
import data from '../assets/blogsData.json'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Blogcards = () => {
    const filte=data.slice(0,12)
    const filter=  fetch('../assets/blogsData.json');
    console.log(filter)
    // const filtes=  filter.json();
    // const filte = filter.slice(0,12)
    return (
     <div className='grid md:grid-cols-3 sm:grid-col-2 grid-col-1'>
        {
            filte.map((blog)=> <Link key={blog.id} className='p-3 pb-1 shadow-2xl border border-gray-400 m-4 rounded-lg cursor-pointer'>
                <div>
                    <img src={blog.image} alt="oops" className='w-full object-cover' />
                </div>
                <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                <p className="mb-2 text-gray-800"><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
                <p className='text-sm text-gray-800'>Published:{blog.published_date}</p>

            </Link>)
            
        }
      
    </div> 
  )
}
export default Blogcards
