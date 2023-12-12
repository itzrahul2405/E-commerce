import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Header";

const HomeHeader = () => {
  return (
    <Container fluid className="bg-secondary d-flex flex-column  align-items-center text-white display-1" style={{ height: "50vh", minHeight: "50vh", padding: "20px" }}>
      <Header />
      
      <Container  className="d-flex flex-column align-items-center justify-content-between">
        <Button className="btn btn-text-white btn-lg bg-transparent ">
          Get Our Latest Album
        </Button>
        <Button className="btn btn-text-white btn-lg bg-transparent ">►</Button>
      </Container>
    </Container>
  );
};

export default HomeHeader;
