import React from 'react';

function Card(props) {
  return (
    <div className='max-w-md m-4'>
      <div className='text-center font-bold text-slate-800 bg-slate-200 text-2xl p-4 border-gray-300 rounded-t-lg  overflow-hidden shadow-lg'>{props.title}</div>    
      <div className='text-center text-white bg-slate-800 text-lg font-bold p-4 border-gray-300  overflow-hidden shadow-lg'>{props.description}</div>
      <div className='flex justify-between px-10 py-5 bg-slate-200 text-slate-800 font-bold border-gray-300 rounded-b-lg overflow-hidden shadow-lg'>
        <a href={props.url} className='px-5 text-blue-500'>READ MORE</a>
        <p>Source - {props.source.name}</p>
      </div>
    </div>
  );
}

export default Card;
