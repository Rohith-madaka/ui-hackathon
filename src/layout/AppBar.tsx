import {Navbar, Form, Button, Nav} from 'react-bootstrap';
const AppBar = () => {
    return (
        <Navbar data-bs-theme="dark" className='topbar'>
                <Navbar.Brand>SmartConnect</Navbar.Brand>

            <Nav className='w-100 justify-content-center'>
                <Form className="d-flex" style={{  width: 500}}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </Form>
            </Nav>
        </Navbar>
    )
}

export default AppBar;