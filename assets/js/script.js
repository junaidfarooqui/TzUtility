/**
 * Created by junaidfarooqui on 3/29/17.
 */
var lat = '';
var lng = '';
var TimeZone = '';

$(function () {
    $('.btn-submit').click(function () {
        var city = $('.cityname').val()
        $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(city), function (val) {
            if (val.results.length) {
                var location = val.results[0].geometry.location;
                var lat = location.lat.toFixed(5);
                var lng = location.lng.toFixed(5)
                var url = "https://maps.googleapis.com/maps/api/timezone/json?location=" + lat + "," + lng + "&timestamp=" + (Math.round((new Date().getTime()) / 1000)).toString() + "&sensor=false";
                $.ajax({
                    url: url,
                }).done(function (response) {
                    var TimeZone = response.timeZoneId;
                    $(".cityname").html(city)
                    $(".lat").html(lat);
                    $(".lng").html(lng);
                    $(".timezone").html(TimeZone);
                });
            }
        })
    })
})