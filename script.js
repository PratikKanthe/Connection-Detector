const statusText = document.getElementById("checkText");
const city = document.getElementById("checkCity");
const state = document.getElementById("checkState");
const country = document.getElementById("checkCountry");

statusText.textContent = "Checking...";
city.textContent = "Checking...";

function checkStatus() {
  if (navigator.onLine) {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        response.json().then((jsonData) => {
          const locationString = `${jsonData.city}, ${jsonData.region}, ${jsonData.country_name}`;
          city.textContent = locationString;
          statusText.textContent = "Connected";
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    statusText.textContent = "Disconnected";
    city.textContent = "Not Found";
  }
}

window.onload = function () {
  checkStatus();
};

// {
//     "ip": "208.67.222.222",
//     "city": "San Francisco",
//     "region": "California",
//     "region_code": "CA",
//     "country": "US",
//     "country_name": "United States",
//     "continent_code": "NA",
//     "in_eu": false,
//     "postal": "94107",
//     "latitude": 37.7697,
//     "longitude": -122.3933,
//     "timezone": "America/Los_Angeles",
//     "utc_offset": "-0800",
//     "country_calling_code": "+1",
//     "currency": "USD",
//     "languages": "en-US,es-US,haw,fr",
//     "asn": "AS36692",
//     "org": "OpenDNS, LLC"
// }
