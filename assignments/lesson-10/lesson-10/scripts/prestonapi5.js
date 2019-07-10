let weatherRequest5 = new XMLHttpRequest();
//let api5 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=359088d7b05e1104fa3b9bcab78eb037';
let api5 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=359088d7b05e1104fa3b9bcab78eb037'
weatherRequest5.open('Get', api5, true);
weatherRequest5.send();

weatherRequest5.onload=function(){
    let weatherData5 = JSON.parse(weatherRequest5.responseText);
    console.log(weatherData5);

    let pDate = [];
    let pIcon = [];
    let pTemp = [];

    for (i = 0; i < weatherData5.list.length; ++i) {
        time = weatherData5.list[i].dt_txt;
        if (time.includes("18:00:00")) {

            let date = new Date(weatherData5.list[i].dt * 1000);
            let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let makeDate = weekday[date.getDay()] + "<br>" + month[date.getMonth()] + "<br>" + date.getDate();
            pDate.push(makeDate);

            let temp = weatherData5.list[i].main.temp;
            pTemp.push(temp);

            let iconcode = weatherData5.list[i].weather["0"].icon;
            let icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            pIcon.push(icon_path);
        }
        continue;
    }
    document.getElementById('currenttemp1').innerHTML = pTemp[0];
    document.getElementById('currenttemp2').innerHTML = pTemp[1];
    document.getElementById('currenttemp3').innerHTML = pTemp[2];
    document.getElementById('currenttemp4').innerHTML = pTemp[3];
    document.getElementById('currenttemp5').innerHTML = pTemp[4];

    document.getElementById('currentforcast1').src = pIcon[0];
    document.getElementById('currentforcast2').src = pIcon[1];
    document.getElementById('currentforcast3').src = pIcon[2];
    document.getElementById('currentforcast4').src = pIcon[3];
    document.getElementById('currentforcast5').src = pIcon[4];

    document.getElementById('date1').innerHTML = pDate[0];
    document.getElementById('date2').innerHTML = pDate[1];
    document.getElementById('date3').innerHTML = pDate[2];
    document.getElementById('date4').innerHTML = pDate[3];
    document.getElementById('date5').innerHTML = pDate[4];

    let desc1 = weatherData5.list[0].weather[0].description;
    let desc2 = weatherData5.list[1].weather[0].description;
    let desc3 = weatherData5.list[2].weather[0].description;
    let desc4 = weatherData5.list[3].weather[0].description;
    let desc5 = weatherData5.list[4].weather[0].description;
    
    document.getElementById('currentforcast1').setAttribute('alt', desc1);
    document.getElementById('currentforcast2').setAttribute('alt', desc2);
    document.getElementById('currentforcast3').setAttribute('alt', desc3);
    document.getElementById('currentforcast4').setAttribute('alt', desc4);
    document.getElementById('currentforcast5').setAttribute('alt', desc5);
}