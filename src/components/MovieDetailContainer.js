import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getMovies from "../helpers/getMovies"
import MovieDetail from "./MovieDetail"
import SpinnerLoading from "./SpinnerLoading"


const MovieDetailContainer = () => {
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const movieIdURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`

        getMovies(movieIdURL)
            .then(setMovie)
        setIsLoading(false)
    }, [id])

    return (
        isLoading ? (<SpinnerLoading />) : (<MovieDetail {...movie} />)
    )
}

export default MovieDetailContainer
