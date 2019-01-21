import React from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

export default class Navigation extends React.Component {
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
        <Navbar color="light" light className="fixed-top" expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Container>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/Home/">Accueil</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Projects/">Projets</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/CV">CV</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Contact">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
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