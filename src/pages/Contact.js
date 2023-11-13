import React from 'react'
// import imag from '../assets/contact.png'
const Contact = () => {
  return (
    <div>
      <div className='bg-black text-white text-center py-32 px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '>Contact Us Page</h2>
      </div>
      <div className='flex flex-col items-center justify-center p-6  w-[90vw] min-w-[50vw] mx-auto'>
        {/* <div>
          <img className='object-cover' src={imag} alt="opps" />
        </div> */}
        <h4 className='text-3xl'>Contact Us</h4>
          <form className='flex flex-col w-[60vw] min-w-[50vw]'>
            <label htmlFor="name" className='text-bold '>Full Name : </label>
            <input type="text" name="name" id="name" placeholder='Your Full Name' required  className='border mb-2 p-2 w-full max-w-[40rem] bordre-neutral-900'/>
            <label htmlFor="email"className='text-bold '>Email : </label>
            <input type="text" name="email" id="email" placeholder='example@doamin.com' required className='border mb-2  p-2 max-w-[40rem] bordre-neutral-900'/>
            
            <label htmlFor="sub"className='text-bold '>Subject : </label>
            <input type="text" name="sub" id="sub" placeholder='Enter your subject' className='border max-w-[40rem]  mb-2  p-2 bordre-neutral-900'/>
            
            <label htmlFor="nam"className='text-bold '>Message : </label>
            <textarea name="nam" id="nam" cols="30" rows="10"className='border mb-2 bordre-neutral-900 max-w-[40rem]  p-2' placeholder='Type your message'></textarea>
          </form>
      </div>
      <div className='flex items-center justify-center'>
            <button type='submit' className='bg-blue-500 text-white px-2 py-1 m-3 rounded-md'>submit</button>

      </div>
    </div>
  )
}

export default Contact
