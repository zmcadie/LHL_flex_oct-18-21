const getLoggedInUser = (templateVars, users) => (req, res, next) => {
  const { user_id } = req.session
  const user = users[user_id]
  templateVars.user = user
    ? { id: user_id, email: user.email }
    : null
  next()
}

module.exports = getLoggedInUser