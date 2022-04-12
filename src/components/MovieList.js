import { useEffect, useState } from "react"
import MovieItem from "./MovieItem"
import getMovies from "./../helpers/getMovies"
import Row from "react-bootstrap/Row"
import Spinner from "react-bootstrap/Spinner"

const trendingMoviesURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`

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
        <>
            {
                isLoading
                    ? // Spinner
                    <Row className="justify-content-center align-items-center" style={{height: `calc(100vh - 56px)`}}>
                        <Spinner animation="border" role="status" variant="primary" />
                    </Row>
                    : // List
                    <div className="mt-3">
                    <h3>Trending movies</h3>
                    <Row as="ul" className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3 list-unstyled" >
                        { movies.map(movie => <MovieItem key={movie.id} {...movie} />) }
                    </Row >
                    </div>
            }
        </>

    )
}

export default MovieList
