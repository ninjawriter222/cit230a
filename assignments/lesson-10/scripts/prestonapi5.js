let weatherRequest5 = new XMLHttpRequest();
//let api5 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=359088d7b05e1104fa3b9bcab78eb037';
let api5 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=359088d7b05e1104fa3b9bcab78eb037'
weatherRequest5.open('Get', api5, true);
weatherRequest5.send();

weatherRequest5.onload=function(){
    let weatherData5 = JSON.parse(weatherRequest5.responseText);
    console.log(weatherData5);

    let icon1 = "http://openweathermap.org/img/w/" + weatherData5.list[0].weather[0].icon + ".png"
    let desc1 = weatherData5.list[0].weather[0].description;
    document.getElementById('currenttemp1').innerHTML = weatherData5.list[0].main.temp;

    document.getElementById('currentforcast1').setAttribute('src', icon1);
    document.getElementById('currentforcast1').setAttribute('alt', desc1);
    //document.getElementbyId('currenttemp1').setAttribute('src', temp1)

    let icon2 = "http://openweathermap.org/img/w/" + weatherData5.list[1].weather[0].icon + ".png"
    let desc2 = weatherData5.list[1].weather[0].description;
    document.getElementById('currenttemp2').innerHTML = weatherData5.list[1].main.temp;

    document.getElementById('currentforcast2').setAttribute('src', icon2);
    document.getElementById('currentforcast2').setAttribute('alt', desc2);
    //document.getElementbyId('currenttemp2').setAttribute('src', temp2);

    let icon3 = "http://openweathermap.org/img/w/" + weatherData5.list[2].weather[0].icon + ".png"
    let desc3 = weatherData5.list[2].weather[0].description;
    document.getElementById('currenttemp3').innerHTML = weatherData5.list[2].main.temp;

    document.getElementById('currentforcast3').setAttribute('src', icon3);
    document.getElementById('currentforcast3').setAttribute('alt', desc3);
    //document.getElementbyId('currenttemp3').setAttribute('src', temp3);

    let icon4 = "http://openweathermap.org/img/w/" + weatherData5.list[3].weather[0].icon + ".png"
    let desc4 = weatherData5.list[3].weather[0].description;
    document.getElementById('currenttemp4').innerHTML = weatherData5.list[3].main.temp;

    document.getElementById('currentforcast4').setAttribute('src', icon4);
    document.getElementById('currentforcast4').setAttribute('alt', desc4);
    //document.getElementbyId('currenttemp4').setAttribute('src', temp4);

    let icon5 = "http://openweathermap.org/img/w/" + weatherData5.list[4].weather[0].icon + ".png"
    let desc5 = weatherData5.list[4].weather[0].description;
    document.getElementById('currenttemp5').innerHTML = weatherData5.list[4].main.temp;

    document.getElementById('currentforcast5').setAttribute('src', icon5);
    document.getElementById('currentforcast5').setAttribute('alt', desc5);
    //document.getElementbyId('currenttemp5').setAttribute('src', temp5);

}