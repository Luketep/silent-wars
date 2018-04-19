import React from 'react';
import { NavLink } from 'react-router-dom';

export default class navigation extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    );
  }
}