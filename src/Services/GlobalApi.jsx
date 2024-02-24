import axios from "axios"

const key = "4773035c83904b8baa548fff8c13e0bd"
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key)
const getAllGames = axiosCreate.get('/games?key='+key)
const getGamesListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id)

export default {
    getGenreList,
    getAllGames,
    getGamesListByGenreId
}