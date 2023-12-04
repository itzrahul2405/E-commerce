import './Product.css'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

const Product = () => {

    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

  return (
    <Container>
      <h2 className="text-center mt-5">MUSIC</h2>
      <Row xs={1} md={2} className="d-flex justify-content-between" >
        {productsArr.map((product, index) => (
            <Col key={index}>
                <Card style={{ width: '18rem', border: 'none'}}>
                    <Card.Title className='text-center'>{product.title}</Card.Title>
                    <Card.Body>
                        <Card.Img variant="top" src={product.imageUrl} style={{ transition: 'transform 0.3s', width: '100%' }} className="hover-zoom"/>
                        <div className='mt-5 d-flex justify-content-between'>
                            <Card.Text>${product.price}</Card.Text>
                            <Button variant='warning'>Add To Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
        <div className='mt -10 d-flex justify-content-center'>
            <Button variant='secondary' style={{ backgroundColor: 'gray', color: 'skyblue' }}>See The Cart</Button>
        </div>
    </Container>
  );
};

export default Product;
