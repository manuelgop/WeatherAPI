$(document).ready(function(){
//getlocation
navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
}

function error() {
    console.log("Error...");
}
function weather(lat, long) {
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    $.getJSON(URL, function (data) {
        console.log(data);
        UpdateDOM(data);
    });
}


function UpdateDOM(data) {
    var city= data.name;
    var temp = data.main.temp;
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;
    $('#city').html(city);
    $('#temp').html(temp);
    $('#desc').html(desc);
    $('#icon').attr('src', icon);

    console.log("Hola UPDATEDOM");
}
});