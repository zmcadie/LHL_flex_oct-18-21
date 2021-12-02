const express = require('express')
const router = express.Router()

const pokedexRouter = (templateVars, pokedex) => {
  router.get('/', (req, res) => {
    templateVars.pokedex = pokedex
    res.render("pokedex", templateVars)
  })
  
  router.get('/:id', (req, res) => {
    const pokemonData = pokedex[req.params.id - 1]
    if (!pokemonData) {
      return res.redirect("/pokedex")
    }
    templateVars.pokemon = pokemonData
    res.render("pokemon", templateVars)
  })

  return router
}

module.exports = pokedexRouter