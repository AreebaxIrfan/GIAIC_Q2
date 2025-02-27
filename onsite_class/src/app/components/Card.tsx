import React from 'react';
interface Props {
    name: string,
    roll: number,
    day: string,
    email:string,
    address:string,
    time:string
}
const Card = (props: Props) => {
    return (
        <div className='m-12 md:m-10 lg:m-20 mx-4 md:mx-32 lg:mx-96  bg-purple-900 text-white py-3 px-4 md:py-4 md:px-8 flex flex-col justify-center items-center border border-black border-3 rounded-lg hover:bg-purple-700 font-serif text-xl'>
            <h2>Name : {props.name} </h2>
            <h2>Roll no : {props.roll}</h2>
            <h2>Address : {props.address}</h2>
            <h2>Email : {props.email}</h2>
            <h2>Day : {props.day}</h2>
            <h2>Time : {props.time}</h2>
        </div>
    )
}

export default Card