// the hourly forecast API for east lansing, MI
const url = 'https://api.weather.gov/gridpoints/GRR/82,39/forecast/hourly';

// the container in the html
const container = document.querySelector(".weather");

// right when the loads, run the function named 'weatherApp()'
weatherApp();

// the main weatherApp() function
async function weatherApp() {
	// call the getData() function to retrieve JSON from the URL above
	// and store it in the variable 'data'
	const data = await getData(url);
	// pass the returned data to the processData() function and store it
	// in a variable named "result"
	const result = processData(data);
	// print the result to the container element
	container.innerHTML = result;
	
}

// this function takes the JSON data and formats it
function processData(dataArray) {

	console.log(dataArray.properties.periods[0].shortForecast)
	const current = dataArray.properties.periods[0];

	return`
		<p>Forecast: ${current.shortForecast}</p>
		<p>Temperature: ${current.temperature}${current.temperatureUnit}</p>
	`
}

// this is a helper function that retrieves the remote data,
// then passes it back as "live" JSON data to whatever called it
// you can ignore this, just know that the weatherApp() function calls it
async function getData(dataUrl) {
	const response = await fetch(dataUrl);
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`);
	}
	const json = await response.json();
	return json;
}
