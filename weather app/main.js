const api = {
    key: "b46b852e783bf645cddc943ecbbf5bac",
    baseurl: "https://api.openweathermap.org/data/2.5/"

    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b46b852e783bf645cddc943ecbbf5bac
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        //console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
        .then(weather => { return weather.json(); }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    //let city = document.querySelector('.location .city');
    //city.innerText = '${weather.name}, ${weather.sys.country}';
}