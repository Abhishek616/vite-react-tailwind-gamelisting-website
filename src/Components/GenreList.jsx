import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({setGenreId, setGenreName}) {

    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        getGenreList()
    },[])

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            console.log(resp.data.results)
            setGenreList(resp.data.results)
        })
    }
  return (
    <div className='pr-4'>
        <h2 className='text-[30px] font-bold dark:text-white'>Genres</h2>
        {genreList.map((item, index) => (
            <div onClick={() => {setActiveIndex(index);setGenreId(item.id);setGenreName(item.name)}} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-slate-300 p-2 rounded-lg hover:dark:bg-slate-600 group ${activeIndex==index?'bg-slate-300 dark:bg-slate-600':null}`}>
                <img src={item.image_background} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-in-out duration-200 ${activeIndex==index?'scale-105':null}`} />
                <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-in-out duration-200 ${activeIndex==index?'font-bold':null}`}>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList