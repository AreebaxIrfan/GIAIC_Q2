import React from 'react'

const Skills = () => {
    const skills =[
        {name: 'Next.js ' , icon: "⚛️"},
        {name: 'React ' , icon: "⚛️"},
        {name: 'Typescript ' , icon: "🔷"},
        {name: 'Shadcn UI ' , icon: "🎨"},
        {name: 'Auternity ' , icon: "🖼"},
        {name: 'Tailwind CSS ' , icon: "🎨"},
        {name: 'Boostrap' , icon: "🎨"},
        {name: 'CSS' , icon: "🎨"},
        {name: 'HTML' , icon: "👩‍💻"},
    ];
    return (
        <>
            <div className='min-h-screen bg-black text-white p-4'>
                <h1 className='text-6xl p-10 font-bold mb-4 text-center text-pink-600'>&lt;Skills/&gt;</h1>

                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-4 p-2'>
                    {skills.map((skill, index) => (
                        <div key={index} className='bg-gray-800 rounded-lg p-9 m-5 shadow-lg hover:shadow-pink-500/50 transition duration-300'>
                            <div className='text-2xl ,b-2'>
                                {skill.icon}

                            </div>
                            <h2 className='text-2xl mb-2'>{skill.name} </h2>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div className='bg-pink-500 h-2.5 rounded-full' style={{ width: '90%' }}>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills