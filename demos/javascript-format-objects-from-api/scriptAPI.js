// the url for any API that returns JSON data
const url = 'https://kuurola.com/api/json/pokedemo/';

// where we want to put our formatted output
const outputContainer = document.querySelector('.container');

// immediately call this, the main function that controls all the other functions
doTheWholeThing();

// this is a special type of function that runs
// aynsyncronously, allowing you to get stuff over
// a network while allowing for latencies
async function doTheWholeThing() {
	// first, get the remote data
	const data = await getData(url);

	// when we have it, print to the console
	console.log(data);

	// then pass the data to a function that does *something* to it
	const result = processData(data);

	// finally, print the processed data to the console
	// and insert the results into the container element
	console.log(result);
	container.innerHTML = result;
}

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
				<p>Type: ${pokemon.type.join(', ')}</p>
			</div>

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
