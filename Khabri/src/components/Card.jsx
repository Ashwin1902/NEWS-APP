import React from 'react'

function Card(props) {
  return (
    <div className='max-w-md m-10'>
    <div className='text-center font-bold text-slate-800 bg-slate-200 h-auto text-2xl'>{props.title}</div>    
    <div className='text-center text-white bg-slate-400 h-auto text-lg'>{props.description}</div>
    <div className='flex justify-end px-10 py-5 bg-slate-600 text-white'>
        <a href={props.url} className='px-5'>READ MORE</a>
        <p>Source-{props.source.name}</p>
    </div>
    </div>
  )
}

export default Card