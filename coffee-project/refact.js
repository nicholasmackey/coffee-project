"use strict"

function renderCoffee(coffee) {
    let html = `<div class="coffee coffee-card">
    <img src="images/beans.jpg" alt="coffee beans" class="beans">
    <h2 class="coffee-name">${coffee.name}</h2>
    <p class="coffee-type">${coffee.roast}</p>
    </div>`;
    return html;
}

const endpoint = 'http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide';

function findMatches(wordToMatch, coffees) {
    return coffees.filter(coffee => {
        // here we need to figure out if the coffee or roast matches what was searched.
        const regex = new RegExp(wordToMatch, 'gi'); // g=global i=insensitive
        return coffees.name.match(regex) || coffees.roast.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, coffees);
    console.log(matchArray);
}

const searchInput = document.querySelector('.search')
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);



let coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

fetch(endpoint).then(data => coffees.push(data))
const names = coffees.name;