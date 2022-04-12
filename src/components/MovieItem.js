import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
const MovieItem = ({ original_title, name, backdrop_path, popularity, overview, vote_average }) => {
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
                <Card.Body>
                    <Card.Title className="fs-4">{original_title ?? name}</Card.Title>
                    <Card.Subtitle className="mb-2">Vote: {vote_average}</Card.Subtitle>
                    <Card.Subtitle className="mb-3 text-muted">Popularity: {popularity}</Card.Subtitle>
                    <Card.Text>{overview}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MovieItem
