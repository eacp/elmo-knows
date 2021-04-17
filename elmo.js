// IP and Place field
const ip = document.getElementById("ip");
const loc = document.getElementById("location");

// Make a request using FETCH

fetch("https://ipapi.co/json/").then(res => res.json()).then((data) => {
	ip.innerText = data.ip;

	loc.innerText = `${data.city}, ${data.region}, ${data.country_name}`;
});