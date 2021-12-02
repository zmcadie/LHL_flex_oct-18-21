const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const saltRounds = 10

const userRouter = (templateVars, users) => {
  const getUserByEmail = email => {
    const userId = Object.keys(users).find(id => users[id].email === email)
    if (!userId) return null
    const user = users[userId]
    return { id: userId, ...user }
  }

  router.get('/login', (req, res) => {
    if (templateVars.user) return res.redirect('/')
    res.render('login')
  })
  
  router.post('/login', (req, res) => {
    const { email, password } = req.body
    const user = getUserByEmail(email)
  
    if (bcrypt.compareSync(password, user.password)) {
      req.session.user_id = user.id
      return res.redirect('/')
    }
    res.redirect('/users/login')
  })
  
  router.get('/logout', (req, res) => {
    req.session = null
    return res.redirect('/')
  })
  
  router.get('/register', (req, res) => {
    if (templateVars.user) return res.redirect('/')
    res.render('register')
  })
  
  router.post('/register', (req, res) => {
    const { email, password, passConfirm } = req.body
    const user = getUserByEmail(email)
  
    const errors = []
    if (user) errors.push({msg: 'email already in use'})
    if (password !== passConfirm) errors.push({msg: 'passwords do not match'})
    if (errors.length) return res.render('register', { errors })
  
    const hashedPassword = bcrypt.hashSync(password, saltRounds)
  
    const newId = 1000 + Object.keys(users).length + 1
    users[newId] = { email, password: hashedPassword }
  
    req.session.user_id = newId
    res.redirect('/')
  })

  return router
}

module.exports = userRouter