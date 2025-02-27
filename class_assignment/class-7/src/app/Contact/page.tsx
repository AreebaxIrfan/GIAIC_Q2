

import React from 'react'

const Contact = () => {
  return (
    <div>
            
            <div className=' flex items-center justify-center min-h-screen bg-custom-dark-blue text-white  '>
                <div className='container mx-auto max-w-md '>
                    <h1 className='text-4xl font-bold mb-8 text-center'>
                        Contact Us 
                    </h1>
                   
                        <form action="" className='space-y-6 '>
                            <div>
                                <label className='block mb-2'>Name</label>
                                <input type="text" 
                                id='name'
                                className='w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' />
                            </div>
                            <div>
                                <label htmlFor="email"
                                className='block mb-2'
                                >Email</label>
                                <input type="email" className='w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea id='message' className='w-full px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'></textarea>
                            </div>
                            <button type='submit'
                            className='w-full bg-blue-900 hover:bg-custom-dark-blue text-white font-bold py-2 px-4 rounded transition duration-300 shadow-lg hover:shadow-blue-500/60'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            
            
        </div >
  )
}

export default Contact;