import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"
import Home from "./components/Home"

const App = () => {
    return (
        <Container fluid className='bg-dark'>
            <Home />
        </Container>
    )
}

export default App
