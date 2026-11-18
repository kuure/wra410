// the element we want to access later
const nav = document.querySelector('nav');

// how do we encode our navigation?
const navLinks = [
	{ url: '#home', text: 'Home Page' },
	{ url: '#about', text: 'About' },
	{ url: '#contact', text: 'Contact Us' }
];

// clicking on the links causes the 'hashchange' event
window.addEventListener('hashchange', () => {
	buildNav();
});

// build the nav when the page loads
window.addEventListener('load', () => {
	buildNav();
});

// build the nav bar from the navLinks array
function buildNav() {
	// the "hash" value, get the current one or use "#home"
 	const hash = window.location.hash || '#home';

	// loop the links and use .map() to format each one
	const navHTML = navLinks.map(link => {
		if (hash.endsWith(link.url)) {
			return `
				<li><a href="${link.url}" class="current">${link.text}</a></li>
			`;
		} else {
			return `
				<li><a href="${link.url}">${link.text}</a></li>`;
		}
	});
	nav.innerHTML = `<ul>${navHTML.join('')}</ul>`;
}
