import React from 'react'

const Modal = ({isopen,onclose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isopen ? "" : "hidden"}`}>
        <div className='modal-container'>
            <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded-xl shadow-md'>
                <h2 className='text-xl font-semibold mb-4 mt-6 text-white uppercase'>Please Login Here!</h2>
                <form className='px-4'>
                    <div className='mb-5'>
                        <input type="email" name="email" id="email" placeholder='example@gmail.com' className='w-full rounded-md border border-white px-6 py-3 text-base font-medium text-gray-500 outline-none focus:border-[#6a64f1    ] focus:shadow-md'/>
                    </div>
                    <div className='mb-5'>
                        <input type="password" name="password" id="password" placeholder='Enter your Password' className='w-full rounded-md border border-white px-6 py-3 text-base font-medium text-gray-500 outline-none focus:border-[#6a64f1] focus:shadow-md'/>
                    </div>
                    <div>
                        <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
                    </div>
                </form>
                <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded-md mt-5' onClick={onclose}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
