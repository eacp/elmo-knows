"use strict";
// The API
const ep = "https://ipinfo.io/json";
// IP and Place field
const ipField = document.getElementById("ip");
const locField = document.getElementById("location");
// Get the location
fetch(ep).then(res => res.json()).then(data => {
    const loc = data;
    ipField.innerText = loc.ip;
    locField.innerText = `${loc.city}, ${loc.region}, ${loc.country}`;
});
