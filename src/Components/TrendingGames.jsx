import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(() => {
        console.log("gameList", gameList)
    },[])
  return (
    <div className='my-5 md:block'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
        <div className='md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
            {gameList.map((item) => (
                <div className='bg-slate-300 dark:bg-slate-600 rounded-lg p-2 hover:scale-105 transition-all ease-in-out duration-300'>
                    <img src={item.background_image} className='h-[270px] rounded-lg object-cover' />
                    <h2 className='dark:text-white text-[20px] font-bold'>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrendingGames