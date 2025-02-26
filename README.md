# Pokémon Search App

This is a Pokémon Search App built using HTML, CSS, and JavaScript. It allows users to search for Pokémon by name and displays various details about the Pokémon.

## Features

- Search for Pokémon by name
- Display Pokémon details including:
  - Name
  - ID
  - Weight
  - Height
  - Types
  - Stats (HP, Attack, Defense, Special Attack, Special Defense, Speed)

## Usage

1. Enter the name of the Pokémon in the search input field.
2. Click the search button.
3. The app will fetch and display the details of the Pokémon.

## Live Demo

You can access the live demo of the app [here](https://kamogelomahlake.github.io/pokemon-search-app/).

## Script.js Explanation

The `script.js` file contains the following main functionalities:

- Fetch Pokémon data from the API
- Clean and format the Pokémon name
- Display the fetched data on the webpage

### Fetch Pokémon Data

The `fetchData` function is responsible for fetching the Pokémon data from the API and displaying it on the webpage. It uses the `fetch` API to get the data and then updates the DOM elements with the fetched data.

### Clean Name

The `cleanName` function cleans and formats the Pokémon name by removing any non-alphanumeric characters and converting it to lowercase.

### Event Listener

An event listener is added to the search button to trigger the `fetchData` function when clicked.
