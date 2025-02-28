import React from 'react'



const Contact = () => {
    return (
        <div>
            <div className="flex items-center min-h-screen bg-black text-white p-4">
                <div className="mx-auto  mb-8">
                    <h1 className="text-6xl font-bold m-8 text-pink-600 text-center mb-">
                        &lt;Contact Me/&gt;
                    </h1>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                aria-label="Name"
                                className="w-full px-3 py-4 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                aria-label="Email"
                                className="w-full  px-3 py-4 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                aria-label="Message"
                                className="w-full px-11 py-16 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-5 px-4 rounded transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div >
    )
}

export default Contact