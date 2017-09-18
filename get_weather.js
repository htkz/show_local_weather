$(document).ready(function() {
  $.simpleWeather({
    location: 'Austin, TX',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

      var temp_s = Math.floor((parseInt(weather.temp) - 32) / 1.8);
      document.getElementById("temp-f").innerHTML = weather.temp+'&deg'+ '<span id="change-temp-f">F<span>';
      document.getElementById("temp-s").innerHTML = temp_s.toString()+'&deg'+ '<span id="change-temp-s">C<span>';

      $("#weather").html(html);
    },
    error: function(error) {
    //   $("#weather").html('<p>'+error+'</p>');
    }
  });
});

$("#change-temp-f").onclik(function() {
    $("#temp-f").style.display = "inline";
    $("#temp-s").style.display = "none";
})
$("#change-temp-s").onclik(function() {
    $("#temp-s").style.display = "inline";
    $("#temp-f").style.display = "none";
})
