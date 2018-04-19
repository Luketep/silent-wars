const { getUserID } = require('./../user/user')

const getLogin = async userData => {
  try {
    return await getUserID(userData)
  }
  catch (error) {
    console.log('login error', error)
    return { error }
  }
}

module.exports = {
  getLogin
}