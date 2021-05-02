"use strict";
// IP and Place field
const ipField = document.getElementById("ip");
const locField = document.getElementById("location");
// Get the location
fetch("https://ipinfo.io/json").then(res => res.json()).then(data => {
    const loc = data;
    ipField.innerText = loc.ip;
    locField.innerText = `${loc.city}, ${loc.region}, ${loc.country}`;
});
