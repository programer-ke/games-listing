import React, { useEffect } from 'react'

function Banner ({gameBanner}) {
    useEffect(()=>{
    },[])
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent'>
            <h2 className='text-[24px] text-white w-full font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-600 text-white px-2 p-1 rounded'>Get now</button>
        </div>
      <img src={gameBanner.background_image} className='md:h-[320px] w-full object-cover rounded-xl' />
    </div>
  )
}

export default Banner