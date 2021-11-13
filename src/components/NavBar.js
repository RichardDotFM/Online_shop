import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavLink style={{ color: 'palegreen' }} to={SHOP_ROUTE}>
          Пушок
        </NavLink>
        {user.isAuth ? (
          <Nav className='ml-auto' style={{ color: 'palegreen' }}>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
              className='ml-5'
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' style={{ color: 'palegreen' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
