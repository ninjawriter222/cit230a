//5604473
//Default 359088d7b05e1104fa3b9bcab78eb037

//api.openweathermap.org/data/2.5/weather?id=5604473

let pWeatherRequest = new XMLHttpRequest();
let apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=359088d7b05e1104fa3b9bcab78eb037';
pWeatherRequest.open('Get', apiURLstring, true);
pWeatherRequest.send();


pWeatherRequest.onload=function(){
    let weatherData = JSON.parse(pWeatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('high').innerHTML = weatherData.main.temp_max;
    document.getElementById('low').innerHTML = weatherData.main.temp_min;
    document.getElementById('wind').innerHTML = weatherData.wind.speed;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;

    let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"
    let desc = weatherData.weather.description;

    document.getElementById('icon').setAttribute('src', icon);
    document.getElementById('icon').setAttribute('alt', desc);
}