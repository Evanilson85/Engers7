import logo from '../../../assets/logo.svg'
import { Burger } from './button';
import { Nav, Container } from './style'

export const Menu = () => {
  return (
    <>
       <Nav>
        <Container>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <Burger />
        </Container>
      </Nav>
    </>
  )
}