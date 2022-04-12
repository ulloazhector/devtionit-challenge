import Row from "react-bootstrap/Row"
import Spinner from "react-bootstrap/Spinner"
import './SpinnerLoading.scss'

const SpinnerLoading = () => {
    return (
        <Row className="justify-content-center align-items-center w-100 spinner__loading" >
            <Spinner animation="border" role="status" variant="primary" />
        </Row>
    )
}

export default SpinnerLoading
