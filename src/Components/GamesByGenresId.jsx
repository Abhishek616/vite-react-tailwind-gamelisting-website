import React, { useEffect } from 'react'

function GamesByGenresId({gameList, genreName}) {
  useEffect(() => {
    console.log("game list:", gameList)
  },[])
  return (
    <div className='my-5 md:block'>
      <h2 className='font-bold text-[30px] dark:text-white'>Popular {genreName} Games</h2>
      <div className='md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {gameList.map((item) => (
          <div className='bg-slate-300 dark:bg-slate-600 rounded-lg p-2 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>
            <img src={item.background_image} className='h-[270px] rounded-lg object-cover' />
            <h2 className='text-[20px] dark:text-white font-bold'>{item.name}<span className='bg-green-100 ml-2 rounded-sm text-green-700 font-medium text-[12px] p-1 items-center'>{item.metacritic}</span></h2>
            <h2 className='dark:text-white text-[15px] '>⭐{item.rating}💬{item.reviews_count}🔥{item.suggestions_count}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GamesByGenresId