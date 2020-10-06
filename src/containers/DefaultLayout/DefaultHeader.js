import React, { Component } from "react"
import { Button, Nav } from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"

import { clearStore } from "../../store"

const propTypes = {
  children: PropTypes.node
}

const defaultProps = {}

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, navConfig, ...attributes } = this.props
    var parth = window.location.href.split("/")
    var result = parth[parth.length - 1]
    const defaultLink = `#${result}`
    return (
      <header className="App-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-2">
              <a href="#">Demo</a>
            </div>
            <div className="col-sm-10">
              <div className="menu">
                <Navbar bg="dark" collapseOnSelect expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey={defaultLink} as="ul">
                      {navConfig.items.map((value, index) => {
                        return (
                          <Nav.Item as="li">
                            {/* <Nav.Link href={value.url}>{value.name}</Nav.Link> */}
                          </Nav.Item>
                        )
                      })}
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

DefaultHeader.propTypes = propTypes
DefaultHeader.defaultProps = defaultProps

export default withRouter(DefaultHeader)
