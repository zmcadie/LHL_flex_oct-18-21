const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const port = 3001

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(cors())

// this is a JSON array of pokemon objects
const pokedex = require("./data/pokedex.json")
// this is a JSON array of pokemon types
const types = require("./data/types.json")

app.get('/', (req, res) => {
  res.json(pokedex)
})

app.get('/types', (req, res) => {
  res.json(types)
})

app.get('/types/:type', (req, res) => {
  const pokemonOfType = pokedex
    .filter(pokemon => pokemon.type.includes(req.params.type))
  res.json(pokemonOfType)
})

app.get('/pokemon/:id', (req, res) => {
  const pokemonData = pokedex[req.params.id - 1]
  
  if (!pokemonData) {
    return res.sendStatus(404)
  }
  
  res.json(pokemonData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})