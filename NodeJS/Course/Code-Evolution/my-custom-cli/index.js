#!/usr/bin/env node

// console.log("Mohit-Pokedex")

// console.log(process.argv);

// const yargs = require("yargs");
// const {argv} = yargs(process.argv)

const inquirer = require('inquirer')
const printFiveMoves = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    // console.log(response);
    const pokemon  = await response.json();
    // console.log(pokemon);
    const moves = pokemon.moves.map((move) => move.move.name)
    console.log(moves.slice(0,5));
};

const prompt = inquirer.createPromptModule()
prompt([{
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its five moves"
}]).then((answers) => {
    const pokemon = answers.pokemon;
    printFiveMoves(pokemon);
})
