import React from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <>
        <Navbar dark className="fixed-top navbar-custom" expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Container>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Accueil</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects/">Projets</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/CV">CV</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink target="_blank" href="https://github.com/ygout" >
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
