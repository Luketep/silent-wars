const path = require('path')
const express = require('express')

const app = express()
const PORT = 1337
const server = app.listen(PORT)

app.use(express.static(path.join(__dirname, '..', 'target')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'target', 'index.html'))
})

app.post('/api/login', async (req, res) => {
  const { getLogin } = require('./login/login')

  console.log('incoming login request')

  try {
    console.log('getting user data')

    const userID = await getLogin(req.body)

    if (userID.message) {
      console.log('[index][/api/login] error', userID.message)
    }

    if (userID) {
      res.status(200).send({ userID })
    }
    else {
      res.status(401).send({ error })
    }

  }
  catch (error) {
    console.log('[index][/api/login] error', error.messager)
    res.status(400).send({ error })
  }
})

app.post('/api/register', async (req, res) => {
  console.log('registration attempt')
  
  const { registerUser, validateUserData } = require('./register/register')
  const { username, email, password, password2 } = req.body;

  const validationErrors = validateUserData(req.body)

  if (validationErrors.length) {
    res.status(200).send({ validationErrors })
  }
  else {
    try {
      const registrationResult = await registerUser(req.body)
      const status = registrationResult ? 400 : 200

      res.status(status).send(registrationResult || {})
    }
    catch (error) {
      res.status(400).send({ error })
    }
  }
})

module.exports = server