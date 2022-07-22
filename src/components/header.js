import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { checkLogin, LogOut } from '../service/loginService';
const Header = ()=> {
  const LogOutHelper = () =>{
    LogOut();
    window.location.reload();
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">BetCrypto</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          {
            checkLogin()
            ?<>
                <NavDropdown title="Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={LogOutHelper}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#deets">Wallets</Nav.Link>
                  <Nav.Link href="#deets">Notifications</Nav.Link>
              </>
            :<>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              </>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
