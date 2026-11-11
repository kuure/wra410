// the hourly forecast API for east lansing, MI
const url = 'https://api.weather.gov/gridpoints/GRR/82,39/forecast/hourly';

// made-up API key for example:
const apiKey = 'MYAPIKEYKEEPTHISSECRET';
//
// the container in the html
const container = document.querySelector('.weather');

// right when the loads, run the function named 'weatherApp()'
weatherApp();

// the main weatherApp() function
async function weatherApp() {
	// call the getData() function to retrieve JSON from the URL above
	// and store it in the variable 'data'
	const data = await getData(url);
	// if you have an api key:
	//const data = await getData(url,apiKey);

	// pass the returned data to the processData() function and store it
	// in a variable named "result"
	const result = processData(data);
	// print the result to the container element
	container.innerHTML = result;
}

// this function takes the JSON data and formats it
function processData(dataArray) {
	console.log(dataArray.properties.periods[0].shortForecast);
	const today = dataArray.properties.periods[0];

	// set up a variable to be given a value later
	let style = '';

	// if the "temperature" value is less than or equal to 32
	if (today.temperature <= 32) {
		style = 'cold';
	}
	// greater than 32, less than or equal to 70
	else if (today.temperature > 32 && today.temperature <= 70) {
		style = 'warm';
	}
	// any other situation
	else {
		style = 'hot';
	}

	// create the actual HTML we want to display, with placeholders
	// for the "style" value, the temp value and temp units
	const formattedData = `
	<div class="${style}">
		Temp is ${today.temperature}${today.temperatureUnit}
	</div>
	`;

	// hand that block of html back to whatever called this function
	return formattedData;
}

// this is a helper function that retrieves the remote data,
// then passes it back as "live" JSON data to whatever called it
// you can ignore this, just know that the weatherApp() function calls it
async function fetchJson(dataUrl, apiKey) {
	const headers = { Accept: 'application/json' };

	// if you need an api key...
	if (apiKey) {
		headers['Authorization'] = `Bearer ${apiKey}`;
	}

	const response = await fetch(dataUrl, { headers });

	if (!response.ok) {
		throw new Error(
			`Request failed: ${response.status} ${response.statusText}`
		);
	}

	const json = await response.json();
	return json;
}
