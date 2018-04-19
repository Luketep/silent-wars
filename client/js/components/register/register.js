import React from 'react'

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-form">
        <h2>register</h2>
        <input type="text" name="username" placeholder="Username" /><br />
        <input type="email" name="email" placeholder="E-Mail" /><br />
        <input type="password" name="password" placeholder="Password" /><br />
        <input type="password" name="password2" placeholder="Password" /><br />
        <input type="submit" onClick={this.onClick} value="register" />
      </div>
    );
  }

  onClick(event) {
    console.log('Fetching App')

    const form = document.querySelector('.register-form')
    const username = form.querySelector('input[name=username]').value
    const email = form.querySelector('input[name=email]').value
    const password = form.querySelector('input[name=password]').value
    const password2 = form.querySelector('input[name=password2]').value

    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, password2 }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(json => console.log('API response', json))
      .catch(e => console.error('API error', e))
  }
}