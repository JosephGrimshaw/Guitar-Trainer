import { Container, Row, Col, Nav, Navbar, Button} from "react-bootstrap";
import accountIcon from '../assets/accountIcon.svg'

function PageNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark" sticky='bottom'>
        <Container fluid>
            <Row xs={12}>
                <Col>
                    <Navbar.Brand href="/">Fretboard Master</Navbar.Brand>
                </Col>
            
                <Col>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                     <Nav className="me-auto">
                        <Nav.Link href="/music">Music</Nav.Link>
                        <Nav.Link href="/drama">Drama</Nav.Link>
                        <Nav.Link href="/it">IT</Nav.Link>
                        <Nav.Link href="/academia">Academia</Nav.Link>
                        <Nav.Link href="/dofe">DofE</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col xs={0}></Col>
            
            </Row>
            <Row>
                <Col xs={0}></Col>
                <Col xs="auto">
                        <Button variant="outline-secondary" href="/contact">Contact</Button>
                </Col>
                <Col xs="auto">
                    <Nav className="me-auto">
                        <Nav.Link href="/account"><img src={accountIcon} width="35rem" /></Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </Navbar>
    )
}

export default PageNavbar