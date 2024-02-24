import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(() => {
        console.log("gameBanner", gameBanner)
    })
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-tansparent w-full rounded-xl'>
            <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white px-2 py-1 rounded-full'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} className='w-full h-auto object-cover rounded-xl' />
    </div>
  )
}

export default Banner