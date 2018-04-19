const sha256 = require('sha256')
const connector = require('./../utils/connector')

const getPID = async userID => {
  const connection = await connector.createConnection()
  const result = await connection.query(`SELECT pid FROM pidaid WHERE aid=${userID}`)

  await connection.end()
  
  if (result.length === 1) {
    return result[0].pid
  }

  throw Error(`Unable to find pID for aID ${userID}`)
}

const getPassword = async pID => {
  const connection = await connector.createConnection()
  const result = await connection.query(`SELECT paw FROM pidpaw WHERE pid=${pID}`)

  await connection.end()
  
  if (result.length === 1) {
    return result[0].paw
  }

  throw Error(`Unable to find password for pID ${pID}`)
}

const getUserID = async userData => {
  try {
    console.log('creating connection')
    const connection = await connector.createConnection()
    
    console.log('sanitzing user input')
    const username = connection.escape(userData.username)
    const password = sha256(userData.password)
    
    console.log('getting user id')
    const userResult = await connection.query(`SELECT id FROM accounts WHERE username=${username}`)

    await connection.end()

    if (userResult.length !== 1) {
      throw Error(`User [${username}] not found`)
    }

    const userID = userResult[0].id

    console.log('getting pid')
    const pID = await getPID(userID)

    console.log('getting password')
    const passwordFromDb = await getPassword(pID)

    console.log('checking if password matches')
    const passwordsMatch = password === passwordFromDb

    if (passwordsMatch) {
      console.log('access granted')
      return userID
    }

    throw Error(`Unable to obtain account for username ${username}`)
  }
  catch (error) {
    console.log('error', error)
    return error
  }
}

module.exports = {
  getUserID
}