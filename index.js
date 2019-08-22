function displayDate() {
    var country = document.getElementById("income-country").value;
    var city = document.getElementById("income-city").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=d6cba247beb48cdb15a9b7e1ba2175c9&lang=es`;
    debugger

fetch(url)
.then(response => response.json())
.then(weather => console.log("\nPaís: " + weather.sys.country + "\nCiudad: " + weather.name + "\nTemperatura: "+ (weather.main.temp-273.15).toFixed(1) + "\nHumedad: " + weather.main.humidity + "%" + " \nVisibilidad: " + (weather.visibility/1000).toFixed(1) + "Kms"));

fetch(url)
.then(response => response.json())
.then(weather => document.getElementById('pais').innerHTML = "País: " + weather.sys.country);

fetch(url)
.then(response => response.json())
.then(weather => document.getElementById('ciudad').innerHTML = "Ciudad: " + weather.name);

fetch(url)
.then(response => response.json())
.then(weather => document.getElementById('temperatura').innerHTML = "Temperatura: " + (weather.main.temp-273.15).toFixed(1) + " ºC");

fetch(url)
.then(response => response.json())
.then(weather => document.getElementById('humedad').innerHTML = "Humedad: " + weather.main.humidity + "%");

fetch(url)
.then(response => response.json())
.then(weather => document.getElementById('visibilidad').innerHTML = "Visibilidad: " + (weather.visibility/1000).toFixed(1) + "Kms");
}
