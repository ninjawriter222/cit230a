var townindex, city;
var section = document.querySelector('section')
//var requestURL = 'https://ninjawriter222.github.io/towndata/towndata.json';
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var towndata = request.response;
    displayData(towndata);
}

function displayData(jsonObj) {
    city = jsonObj['towns'];
    for (townindex = 0; townindex < city.length; townindex++) {
        if (city[townindex].name == 'Preston')
            enterTownInfo(city[townindex]);
    }
    for (townindex = 0; townindex < city.length; townindex++) {
        if (city[townindex].name == 'Soda Springs')
            enterTownInfo(city[townindex]);
    }
    for (townindex = 0; townindex < city.length; townindex++) {
        if (city[townindex].name == 'Fish Haven')
            enterTownInfo(city[townindex]);
    }
}

function enterTownInfo(jsonObj) {
    var city = jsonObj;

    var myArticle = document.createElement('article');
    var header = document.createElement('h1');
    var header1 = document.createElement('h2');
    var paragraph = document.createElement('p');
    var paragraph1 = document.createElement('p');
    var paragraph2 = document.createElement('p');
    var townImage = document.createElement('img');

    header.textContent = city.name;
    header1.texContent = city.motto;
    paragraph.textContent = "Year Founded: " + city.yearFounded;
    paragraph1.textContent = "Population: " + city.currentPopulation;
    paragraph2.textContent = "Rainfall on average: " + city.averageRainfall;
    townImage.setAttribute = ('class', 'town-data-image');


    switch (header.textContent) {
        case "Preston":
            townImage.src = "images/preston.jpg";
            break;

        case "Soda Springs":
            townImage.src = "images/soda springs.jpg";
            break;

        case "Fish Haven":
            townImage.src = "images/fishhaven.jpg";
            break;
    }

    myArticle.appendChild(header)
    myArticle.appendChild(header1)
    myArticle.appendChild(paragraph)
    myArticle.appendChild(paragraph1)
    myArticle.appendChild(paragraph2)
    myArticle.appendChild(townImage)
    myArticle.className = "citydata";

    section.appendChild(myArticle);
}

//document.getElementById ("windChill").innerHTML= windChill;