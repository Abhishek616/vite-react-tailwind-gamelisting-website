import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenresId from '../Components/GamesByGenresId'

function Home() {
  const [allGameList, setAllGameList] = useState([])
  const [gameListByGenreId, setGameListByGenreId] = useState([])
  const [genreName, setGenreName] = useState('Action')

  useEffect(() => {
    getAllGamesList()
    getGameListByGenresId(4)
  },[])

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      console.log(resp.data.results)
      setAllGameList(resp.data.results)
    })
  }

  const getGameListByGenresId = (id) => {
    console.log("genre id", id)
    GlobalApi.getGamesListByGenreId(id).then((resp) => {
      console.log("game list by genre id", resp.data.results)
      setGameListByGenreId(resp.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-5'>
      <div className='hidden md:block'>
        <GenreList setGenreId={(setGenreId) => getGameListByGenresId(setGenreId)} setGenreName={(name) => setGenreName(name)} />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGameList?.length>0&&gameListByGenreId.length>0?
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenresId gameList={gameListByGenreId} genreName={genreName} />        
          </div>
        :null}
      </div>
    </div>
  )
}

export default Home