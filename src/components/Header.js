import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink aria-label="Accueil" href="/">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink aria-label="Projets" href="/projects/">Projets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink aria-label="CV" href="/resume">CV</NavLink>
              </NavItem>
              <NavItem>
                <NavLink aria-label="contact" href="/contact">Contact</NavLink>
              </NavItem>

            </Nav>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink aria-label="gitHub" rel="noopener noreferrer" target="_blank" href="https://github.com/ygout" >
                  <FaGithub size="1.5em"></FaGithub>
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink aria-label="linkedin" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/yohann-goutaret-5150a9149/" >
                  <FaLinkedin size="1.5em"></FaLinkedin>
                </NavLink>
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
      </>
    )
  }
}
