// where we want to put our formatted output
const outputContainer = document.querySelector('.container');

/*
	 This is the data that we want to format into HTML to display on a page

	This set of data is in an _array_, or a container for multiple "things" in a
	certain order. These things can be strings, numbers, boolean values, even
	other arrays or objects

	In this case, each "thing" is an _object_, a structure in JavaScript that
	contains any number of key/value pairs. Every _key_ is a word of some sort,
	like a variable name; the _value_ associated with each _key_ can be any
	of the same things that can be in arrays

	In web development, it is very common for data formatted as an _array_ that
	contains any number of _objects_. Arrays are easy to loop through in order to
	do some sort of action to each item encountered, while objects
	are great for defining the kinds of things you might want to display on a web
	page - search results, photos with captions with links, comments, etc.
 
*/
const data = [
	{
		name: 'Bulbasaur',
		species: 'Seed Pokémon',
		image: 'https://kuurola.com/pokemon/images/bulbasaur.jpg',
		type: ['poison', 'grass'],
	},
	{
		name: 'Charmander',
		species: 'Lizard Pokémon',
		image: 'https://kuurola.com/pokemon/images/charmander.jpg',
		type: ['fire'],
	},
	{
		name: 'Sandshrew',
		species: 'Mouse Pokémon',
		image: 'https://kuurola.com/pokemon/images/sandshrew.jpg',
		type: ['ground'],
	},
	{
		name: 'Diglett',
		species: 'Mole Pokémon',
		image: 'https://kuurola.com/pokemon/images/diglett.jpg',
		type: ['ground'],
	},
	{
		name: 'Snorlax',
		species: 'Sleeping Pokémon',
		image: 'https://kuurola.com/pokemon/images/snorlax.jpg',
		type: ['normal'],
	},
	{
		name: 'Piloswine',
		species: 'Swine Pokémon',
		image: 'https://kuurola.com/pokemon/images/piloswine.jpg',
		type: ['ice', 'ground'],
	},
	{
		name: 'Houndoom',
		species: 'Dark Pokémon',
		image: 'https://kuurola.com/pokemon/images/houndoom.jpg',
		type: ['dark', 'fire'],
	},
	{
		name: 'Ludicolo',
		species: 'Carefree Pokémon',
		image: 'https://kuurola.com/pokemon/images/ludicolo.jpg',
		type: ['water', 'grass'],
	},
	{
		name: 'Umbreon',
		species: 'Moonlight Pokémon',
		image: 'https://kuurola.com/pokemon/images/umbreon.jpg',
		type: ['dark'],
	},
	{
		name: 'Tentacruel',
		species: 'Jellyfish Pokémon',
		image: 'https://kuurola.com/pokemon/images/tentacruel.jpg',
		type: ['water', 'poison'],
	},
];

// when the page loads, take the data from above, pass it to the
// 'processData()' function, then set the contents of the container
// div to be the value returned by the function
outputContainer.innerHTML = processData(data);

// this function takes the array and formats it
function processData(dataArray) {
	// use the .map() tool to chop up and format parts
	// of the data into a new array
	// this says:
	// 1. make a new var called "formattedData"
	// 2. set that equal to the results of calling the .map() array method // on the data array
	// 3. while doing so, temporarily refer to each object as "pokemon"
	const myHTML = dataArray.map(pokemon => {
		// for every item in the array, format parts of the object with HTML
		// and return it to the new array called "formattedData"
		return `
			<div class="pokemon">
			<h1>${pokemon.name}</h1>
			<h2>${pokemon.species}</h2>
			<p>${pokemon.type.join(', ')}</p>
			<figure>
				<img src="${pokemon.image}" alt="${pokemon.name}">
			</figure>
			</div>
		`;
	});

	// once we've looped everything and put it into the formattatedData
	// array, return that value to whatever called the "processData()"
	// function, but only after using ".join()" to combine everything into a
	// single string of text with no characters between each item
	return myHTML.join('');
}
