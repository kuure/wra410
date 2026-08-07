// this is the API endpoint for my supabase DB; it returns every item in
// the database but this can be adjusted using SQL 
const apiURL = 'https://tsedhbjvvmjytupssdar.supabase.co/rest/v1/svg_images?select=*'


// the publishable API key
// there is a whole world out there about keeping these hidden in .env
// files or server-side only readable files etc. 
// right now this is horribly insecure 
const apiKey = 'sb_publishable_XHdtby2vZj6zzJRw11G84g_EX5uh5gh'


// the html container
const container = document.querySelector("#container");





// immediately call this, the main function that controls all the other functions
doTheWholeThing()




// define the asynchornous function that runs everything...
async function doTheWholeThing() {

	// first, get the remote data calling the 'getData()' function below,
	// passing the URL and apiKey as params
	const data = await getData(apiURL, apiKey);

	// next pass the data to the processData() function
	const result = processData(data);

	// finally, set the innerHTML of the container element to our processed data
	container.innerHTML = result;
}





// the function that processes the data into HTML
function processData(dataArray) {

	// the data comes back as an array, so use the array.map() 
	// method to format it
	const formattedData = dataArray.map(dataItem => {
		return (`
		<div class="item">
				<p>Item ID: ${dataItem.id}</p>
				<p>Item TimeStamp: ${dataItem.created_at}</p>
			</div>

			<figure>
				${dataItem.svg_content}
			</figure>

		</div>
		`)
	}).join(""); // do this to remove the default comma between items


	// send this back to whatever called it
	return (formattedData);


}




// the function that fetches the remote data
async function getData(url, key) {

	/* supabase needs HTTP headers in this format */
	const response = await fetch(url, {
		headers: {
			'apiKey': key,
			'Authorization': `Bearer ${key}`
		}
	});


	// check for any errors
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}

	// if all good, turn it into JSON
	const json = await response.json();

	// send it back to whatever called it
	return json;
}
