import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return <Container fluid className="bg-secondary d-flex justify-content-center align-items-center text-white display-1" style={{ height: '30vh', minHeight: '30vh', padding: '20px' }} >
        The Generics
    </Container>;
};

export default Header;
