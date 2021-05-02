

// IP and Place field
const ipField = document.getElementById("ip");
const locField = document.getElementById("location");

// The location schema from the DB

interface Location {
	city: string,
	region: string,
	country: string
	ip: string
}

// Get the location
fetch("https://ipinfo.io/json").then(res => res.json()).then(data => {
	const loc = data as Location;

	ipField.innerText = loc.ip;
	locField.innerText = `${loc.city}, ${loc.region}, ${loc.country}`;
});