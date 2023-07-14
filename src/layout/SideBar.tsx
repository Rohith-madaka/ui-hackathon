import {Nav, Navbar} from "react-bootstrap";
import { useLocation, useHistory } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation()
    const history = useHistory();

    const goToLink = link => event => {
        event.preventDefault();
        history.push(link);
    }
    return (
        <div bg="dark" data-bs-theme="dark" className='sidebar'>
            <Navbar >
                <Nav activeKey={location.pathname} className='flex-column w-100 my-4'>
                    <Nav.Link
                        key='route-link-dashboard'
                        eventKey='/dashboard'
                        onClick={goToLink('/dashboard')}
                        >
                        <span className='menu-icon'>
                        <i className="bi bi-speedometer2"></i>
                            </span>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link
                        key='route-link-Details'
                        eventKey='/details'
                        onClick={goToLink('/details')}
                    >
                        <span className='menu-icon'>
                            <i className='bi bi-journal-code'></i>
                        </span>
                        Details

                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Sidebar;