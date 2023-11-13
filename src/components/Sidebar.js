import React, { useEffect, useState } from 'react'
import url from '../assets/blogsData.json'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
const Sidebar = () => {
    const [Popularblogs, setPopularblogs] = useState([])
    useEffect(() => {
        const dat =url.slice(30,45)
        setPopularblogs(dat)
    }, [])
    return (
        <div className='mt-5'>
            <div>
                <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
                <div>
                    {
                        Popularblogs.slice(0,5).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                            <Link to="/" className='text-base pb-2 hover:text-orange-500  inline-flex items-center py-1'>Read more <FaArrowRight className='mx-2 mt-[0.5px]'/></Link>
                        </div>)
                    }
                </div>
            </div>

            
            <div>
                <h3 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h3>
                <div>
                    {
                        Popularblogs.slice(6,11).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                            <Link to="/" className='text-base pb-2 hover:text-orange-500  inline-flex items-center py-1'>Read more <FaArrowRight className='mx-2 mt-[0.5px]'/></Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar
