import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import './MovieDetail.scss'

const MovieDetail = ({ title, backdrop_path, genres, overview, runtime, release_date, vote_average }) => {

    return (
        <Container fluid="xl" className="my-3 px-0">
            <Row className="g-0 mx-3 shadow rounded-3 overflow-hidden">
                <Col md={{order:'first'}} xs={{ order: 'last' }} className="wrapper p-2">
                    <div className="movie-info p-3">
                        <h2>{title}</h2>
                        <h5>{vote_average} / 10</h5>
                        <Row>
                            <Col xs={3}>
                                <h6>{release_date?.slice(0, 4)}</h6>
                            </Col>
                            <Col>
                                <h6>{runtime} min</h6>
                            </Col>
                        </Row>
                        <p>
                            {genres?.map(genre => genre.name).toString().replaceAll(',', ', ')}
                        </p>
                        <p className="fw-light text-muted lh-sm">{overview}</p>
                    </div>
                </Col>
                <Col md={8}>
                    <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} className="w-100 h-100 img__detail" />
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetail
