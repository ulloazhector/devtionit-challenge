import { useEffect, useState } from "react"
import MovieItem from "./MovieItem"
import getMovies from "./../helpers/getMovies"
import Row from "react-bootstrap/Row"
import SpinnerLoading from "./SpinnerLoading"

const randomPage = Math.ceil(Math.random() * 10)
const trendingMoviesURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${randomPage}`

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMovies(trendingMoviesURL)
            .then(data => {
                const results = data.results
                const orderedMoviesByPopularity = results?.sort((a, b) => b.popularity - a.popularity)
                setMovies(orderedMoviesByPopularity)
                setIsLoading(false)
            })
    }, [])

    return (
        isLoading
            ? // Spinner
            (<SpinnerLoading />)
            : // List
            (<div className="mt-3">
                <h3 className="mb-3">Recomended movies</h3>
                <Row as="ul" className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 list-unstyled" >
                    {movies.map(movie => <MovieItem key={movie.id} {...movie} />)}
                </Row >
            </div>)

    )
}

export default MovieList
