const validateUsername = username => {
  if (typeof username !== 'string' || username.length <= 0) {
    return {
      code: 'R01',
      message: 'Invalid/Empty username'
    }
  }
}

const validateEmail = email => {
  if (typeof email !== 'string' || email.length <= 0) {
    return {
      code: 'R02',
      message: 'Invalid/Empty email'
    }
  }
}

const validatePassword = (password, password2) => {
  if (
    typeof password !== 'string' ||
    typeof password2 !== 'string' ||
    password.length <= 0 ||
    password2.length <= 0 ||
    password !== password2
  ) {
    return {
      code: 'R03',
      message: 'Invalid/Empty/Mismatch of password'
    }
  }
}

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword
}