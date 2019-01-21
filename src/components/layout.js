import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import Header from './header'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import './layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header/>
        <Container>
          {children}
        </Container>
        {/* <Container className="h-100">
         <Row className='h-100 align-items-center'>
          <div> test </div>
         </Row>
       </Container> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
