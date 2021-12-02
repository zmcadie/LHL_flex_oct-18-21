const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const getLoggedInUser = require('./middleware/getLoggedInUser')

const userRouter = require('./routers/userRouter')
const pokedexRouter = require('./routers/pokedexRouter')

const app = express()
const port = 3001

// this is a JSON array of pokemon objects
const pokedex = require("./data/pokedex.json")
// fake users database
const users = {
  1001: { email: "ash.ketchum@pokeleague.gov", password: "$2b$10$bg/nU.LPDe6lYuOBJHkMw.MMaPCUsE1CQ2KWytpxZj7UjDlTsfH2G" },
  1002: { email: "prof.oak@pokeleague.gov", password: "$2b$10$bg/nU.LPDe6lYuOBJHkMw.MMaPCUsE1CQ2KWytpxZj7UjDlTsfH2G" },
  1003: { email: "gary.oak@pokeleague.gov", password: "$2b$10$bg/nU.LPDe6lYuOBJHkMw.MMaPCUsE1CQ2KWytpxZj7UjDlTsfH2G" },
}
// global template variables
const templateVars = {}

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(cookieSession({ name: 'session', secret: 'purple-dinosaur' }))

app.use(getLoggedInUser(templateVars, users))

app.get('/', (req, res) => {
  res.redirect("/pokedex")
})

app.use("/users", userRouter(templateVars, users))
app.use("/pokedex", pokedexRouter(templateVars, pokedex))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})