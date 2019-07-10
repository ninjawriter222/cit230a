let eventRequest = new XMLHttpRequest();
let eventjson = 'https://byui-cit230.github.io/weather/data/towndata.json'
eventRequest.open('Get', eventjson, true);
eventRequest.responseType = 'json';
eventRequest.send();


eventRequest.onload = function() {
    var town = eventRequest.response;
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
