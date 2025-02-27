import React from 'react'

function About() {
    return (
        <div className='m-7'>
            <h1 className='text-emerald-600 text-3xl m-3 font-bold'>I Created the components:</h1>

            <ol className='text-2xl m-2'>The header is styled in emerald color.</ol>
            <ol className='text-2xl m-2'>  The main content area, styled in pink, uses self-closing tags to import components.</ol>
            <ol className='text-2xl m-2'> The About component is included as part of the main content.</ol>
            <ol className='text-2xl m-2'>  The footer component is styled in purple.</ol>
        </div>
    )
}

export default About