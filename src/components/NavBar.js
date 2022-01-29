import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  const logOut = () => {
    user.setUSer({})
    user.setIsAuth(false)
}

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav>
        <a class="navbar-brand" href="#">FluffyBuddy</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
          </button>
          </Nav> 
<div className='xs-2'>

<NavLink style={{color: 'darkcyan'}} to={SHOP_ROUTE }>Главная страница</NavLink>
          
      </div>
          {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'palegreen' }}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => logOut()} className="ml-5">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'palegreen' }}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE) }>Авторизация</Button>
                    </Nav>
                }
        </Container>
      </Navbar>
      
    );
});

export default NavBar;