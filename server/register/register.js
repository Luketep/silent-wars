const connector = require('./../utils/connector')
const sha256 = require('sha256')
const { validateUsername, validateEmail, validatePassword } = require('./validation')

const registerUser = async userData => {
  try {
    console.log('creating connection')
    const connection = await connector.createConnection()
    
    console.log('saniting user input')
    const username = connection.escape(userData.username)
    const email = connection.escape(userData.email)
    const password = sha256(userData.password)

    console.log('starting transaction')
    await connection.query('START TRANSACTION')

    console.log('adding user to acccout')
    await connection.query(`INSERT INTO accounts (username, email) VALUES (${username}, ${email})`)
    console.log('adding user to pidpaw')
    await connection.query(`INSERT INTO pidpaw (paw) VALUES ('${password}')`)

    console.log('getting id and pid')
    const accounts = await connection.query(`SELECT id FROM accounts WHERE username=${username}`)
    const pidpaws = await connection.query(`SELECT pid FROM pidpaw WHERE paw='${password}'`)

    const aID = accounts[0].id
    const pID = pidpaws[0].pid

    console.log('linking id with pid')
    await connection.query(`INSERT INTO pidaid (aid, pid) VALUES (${aID}, ${pID})`)
    
    console.log('committing transaction')
    await connection.query('COMMIT')
    await connection.end()
  }
  catch (error) {
    console.log('error', error)
    return error
  }
}

const validateUserData = ({ username, email, password, password2 }) => {
  try {
    console.log('validating user input')
    const validationErrors = []
    
    const usernameInValid = validateUsername(username)
    const emailInValid = validateEmail(email)
    const passwordInValid = validatePassword(password, password2)

    if (usernameInValid) {
      validationErrors.push(usernameInValid)
    }
    if (emailInValid) {
      validationErrors.push(emailInValid)
    }
    if (passwordInValid) {
      validationErrors.push(passwordInValid)
    }

    return validationErrors
  }
  catch (error) {
    console.log('registration error', error)
    return error
  }
}

module.exports = {
  registerUser,
  validateUserData
}