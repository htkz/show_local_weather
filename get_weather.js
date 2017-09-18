var temp_c, temp_f;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showWeather(position) {
    var latitude =  position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = "https://fcc-weather-api.glitch.me/api/current?"+"lat="+latitude +"&"+"lon="+longitude;
    $.get(url,function(weather){
        console.log(weather);
        temp_c = Math.floor(weather.main.temp);
        temp_f = Math.floor((parseInt(temp_c * 1.8 + 32)));
        var city = weather.name;
        var country = weather.sys.country;
        var weather_info = weather.weather[0];
        var desc = weather_info.description;
        var desc_cap = desc.charAt(0).toUpperCase() + desc.slice(1)
        var icon = weather_info.icon;
        $("#icon").html("<img src="+icon+" />");
        $("#city").html(city+', ' + country);
        $("#desc").html(desc_cap);
        $("#temp").html(temp_c+"&degC")
    })
}

changeType = function() {
    if($("#temp").val() === "c") {
        $("#temp").html(temp_f+"&degF")
        $("#temp").val("f");
    } else {
        $("#temp").html(temp_c+"&degC")
        $("#temp").val("c");
    }
}



getLocation();
$("#change-type").click(changeType);
