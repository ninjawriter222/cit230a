let eventRequest = new XMLHttpRequest();
let eventjson = 'https://byui-cit230.github.io/weather/data/towndata.json'
eventRequest.open('Get', eventjson, true);
eventRequest.send();

eventRequest.onload=function(){
    let eventData = JSON.parse(eventRequest.responseText);
    console.log(eventData);

    document.getElementById('event1').innerHTML = eventData.towns[5].events;
    document.getElementById('motto').innerHTML = eventData.towns[5].motto;
    document.getElementById('townname').innerHTML = eventData.towns[5].name;
    document.getElementById('founded').innerHTML = eventData.towns[5].yearFounded;
    //let prestonphoto = eventData.towns[5].photo;
    //document.getElementById('photo').setAttribute('src', prestonphoto);
}