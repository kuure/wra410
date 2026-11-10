// the url for any API that returns JSON data
const url = '';

// where we want to put our formatted output
const outputContainer = document.querySelector('.container');

// immediately call this, the main function that controls all the other functions
apiApp();

// the main app
async function apiApp() {
	// pass the url to the getData() function below
	// and put the results into a variable named 'jsonData'
	const jsonData = await getData(url);

	// pass the jsonData to the processData() function below
	// and putt the results into a variable named "newHtml"
	const newHtml = processData(data);

	// finally, take the newHtml and put it into the container in index.html
	container.innerHTML = newHtml;
}

// change this function to do something to your API data:
function processData(dataArray) {
	return `Process Your Data Here`;
}

// this function gets the data, you can ignore it
async function getData(dataUrl) {
	const response = await fetch(dataUrl);
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`);
	}
	const json = await response.json();
	return json;
}
