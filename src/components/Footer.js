import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return <Container fluid className="bg-secondary mt-5 d-flex justify-content-between text-white display-1" style={{ height: '20vh', minHeight: '20vh', padding: '20px' }} >
        <div>
            The Generics
        </div>
        <div>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
        </div>
    </Container>;
};

export default Footer;
