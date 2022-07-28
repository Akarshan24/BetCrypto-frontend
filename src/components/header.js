import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LogOut } from '../service/authService';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLoggedOut } from '../features/auth';
import { logOutUser } from '../features/user';
import { load } from '../service/tokenService';
const Header = () => {
  const auth = useSelector(state => state.auth.value);
  const user = useSelector(state => state.user.value);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const LogOutHelper = () => {
    LogOut();
    dispatch(userLoggedOut());
    dispatch(logOutUser());
  }
  const goToProfile = () => {
    nav('/profile');
  }
  const goHome = () => {
    nav('/')
  }
  const goToWallet = async (curr) => {
    nav('/wallets/' + curr);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={goHome}>BetCrypto</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {
              auth.isLoggedIn
                ? <>
                  <NavDropdown title="Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={goToProfile}>Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={LogOutHelper}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Wallets" id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={(e) => { e.preventDefault(); goToWallet('BTC'); }}>Bitcoin (BTC) - {localStorage.getItem('BTC') ? localStorage.getItem('BTC') : "-----"}</NavDropdown.Item>
                    <NavDropdown.Item onClick={async (e) => { await load(true, user.alias) }}>Refresh</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#deets">Notifications</Nav.Link>
                </>
                : <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}
export default Header;
