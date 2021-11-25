const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'))

// this is a JSON array of pokemon objects
const pokedex = require("./data/pokedex.json")

app.get('/', (req, res) => {
  const templateVars = { pokedex }
  res.render("index", templateVars)
})

app.get('/pokedex', (req, res) => {
  // get data from query params in get request
  const pokedexNumber = req.query.pokemon

  // if a specific pokemon is requested in the query params redirect to that page
  if (pokedexNumber) {
    return res.redirect("/pokedex/" + pokedexNumber)
  }
  
  const templateVars = { pokedex }
  res.render("pokedex", templateVars)
})

app.post('/pokedex', (req, res) => {
  // get data from query params in get request
  const pokedexNumber = req.body.pokemon
  res.redirect("/pokedex/" + pokedexNumber)
})

app.get('/pokedex/:id', (req, res) => {
  const pokedexNumber = req.params.id
  const pokedexIndex = pokedexNumber - 1
  const pokemonData = pokedex[pokedexIndex]
  
  if (!pokemonData) {
    return res.redirect("/pokedex")
  }
  
  const templateVars = { pokemon: pokemonData }
  res.render("pokemon", templateVars)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})