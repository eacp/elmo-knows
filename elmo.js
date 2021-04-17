// IP and Place field
const ip = document.getElementById("ip");
const loc = document.getElementById("location");

// Make a request using FETCH

fetch("http://ip-api.com/json/").then(res => res.json()).then((data) => {
	ip.innerText = data.query;

	loc.innerText = `${data.city}, ${data.regionName}, ${data.country}`;
});