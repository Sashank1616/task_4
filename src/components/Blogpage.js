import React from 'react'
import Blogcards from './Blogcards';
import Sidebar from './Sidebar';
const Blogpage = () => {
  return (
    <div>
      <div className='flex lg:flex-row md:gap-12 sm:gap-8 flex-col gap-4 mb-5'> 
        <Blogcards />
        <div>
          <Sidebar/>
        </div>
      </div>
    </div>
  )
}

export default Blogpage
