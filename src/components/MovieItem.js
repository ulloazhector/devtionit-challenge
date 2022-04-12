import './MovieItem.scss'
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { LinkContainer } from 'react-router-bootstrap'
const MovieItem = ({ id, original_title, name, poster_path, popularity, overview, vote_average }) => {

    return (
        <Col as="li">
            <LinkContainer to={`/movie/${id}`}>
                <Card className="h-100 card__item" role="button">
                    <div className="img__wrapper">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="card__img h-100 w-100" />
                    </div>
                    <Card.Body>
                        <Card.Title className="fs-4">{original_title ?? name}</Card.Title>
                        <Card.Subtitle className="mb-2">Vote: {vote_average}</Card.Subtitle>
                        <Card.Subtitle className="mb-3 text-muted">Popularity: {popularity}</Card.Subtitle>
                        <Card.Text>{`${overview?.slice(0, 100)}...`}</Card.Text>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </Col >
    )
}

export default MovieItem
