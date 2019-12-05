import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink eventKey={1} as={Link} to="/" exact activeClassName="active">Topics</NavLink>
                {/* <NavLink to="/first" activeClassName="selected">Form</NavLink> */}
                <NavLink eventKey2={2} as={Link} to="/form" activeClassName="selected">Form</NavLink>
                {/* <NavLink to="/api/topics" exact activeClassName="active">Home</NavLink>
                <NavLink to="/first" activeClassName="selected">Main</NavLink> */}
            </div>
        )
    }
}
