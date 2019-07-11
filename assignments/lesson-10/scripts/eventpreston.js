let eventRequest = new XMLHttpRequest();
let eventjson = 'https://byui-cit230.github.io/weather/data/towndata.json'
eventRequest.open('Get', eventjson, true);
eventRequest.send();

eventRequest.onload=function(){
    let eventData = JSON.parse(eventRequest.responseText);
    console.log(eventData);

    document.getElementById('motto').innerHTML = eventData.towns[4].motto;
    document.getElementById('townname').innerHTML = eventData.towns[4].name;
    document.getElementById('founded').innerHTML = eventData.towns[4].yearFounded;
}

let new1 = document.querySelector('new');
let eventjson1 = 'https://byui-cit230.github.io/weather/data/towndata.json'
let eventRequest1 = new XMLHttpRequest();
eventRequest1.open('Get', eventjson1);
eventRequest1.responseType = 'json';
eventRequest1.send();

eventRequest1.onload = function() {
    var town = eventRequest1.response;
    towns(town);
}

function towns(jsonObj){
    city = jsonObj['towns'];
    if (window.location.pathname.includes("preston")) {
        var townName = "Preston"
    }
    for (i = 0; i < city.length; i++) {
        if (city[i].name == townName)
        event(city[i]);
    }
}

function event(jsonObj) {
    event = jsonObj['events'];
    for (ii = 0; ii < event.length; ii++) {
        fillEvents(event[ii]);
    }
}

function fillEvents(jsonObj) {
    var event = jsonObj;
    console.log(event);

    var myPara = document.createElement('p');

    myPara.textContent = event;

    document.getElementById("event1").appendChild(myPara);
}
