import React from 'react';

interface Props {
    name: string,
    roll: number,
    day: string
};
const Card = (props:Props) => {
    return (
        <div className='flex flex-col text-2xl font-bold  justify-center items-center m-9 bg-emerald-500'>
            <h1>Name : {props.name}</h1>
            <h1>RollNo : {props.roll}</h1>
            <h1>Day : {props.day}</h1>
        </div>
    )
}

export default Card