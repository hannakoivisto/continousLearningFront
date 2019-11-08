import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/first" activeClassName="selected">Main</NavLink>
            </div>
        )
    }
}
