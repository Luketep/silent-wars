import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Username" /><br />
        <input type="password" name="password" placeholder="Password" /><br />
        <input type="submit" onClick={this.onClick} value="login" />
      </div>
    );
  }

  onClick(event) {
    console.log('Fetching App')

    const form = document.querySelector('.login-form')
    const username = form.querySelector('input[name=username]').value
    const password = form.querySelector('input[name=password]').value

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(json => console.log('API response', json))
      .catch(e => console.error('API error', e))
  }
}