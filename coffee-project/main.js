"use strict"

function renderCoffee(coffee) {
    let html = `<div class="coffee">
                    <h2 class="coffee-name">${coffee.name}</h2>
                    <p class="coffee-type">${coffee.roast}</p>
                </div>`;
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (coffeeSearch === '') {
        if (coffees.roast === selectedRoast) {
            filteredCoffees.push(coffees[i]);
        } else if (selectedRoast === 'all') {
            filteredCoffees.push(coffees[i]);
        }  
    } else {
        for (let i = 0; i <= coffees.length - 1; i++) {
            if (coffees[i].name.toLowerCase().includes(coffeeSearch.value.toLowerCase())) {
                if (coffees.roast === selectedRoast) {
                    filteredCoffees.push(coffees[i]);
                } else if (selectedRoast === 'all') {
                    filteredCoffees.push(coffees[i]);
                }
            }
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
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

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeSearch = document.querySelector('#coffee-search');
const input = document.querySelector('input');
const log = document.getElementById('log');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffees)
