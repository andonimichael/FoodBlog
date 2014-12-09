// Copyright: Andoni M. Garcia. Food Blog. 2014

var RESTAURANTS = [];
var MARKERS = [];
var INFOS = [];
var MAP;

function restaurant(Lat, Lng, Name, Date){
    this.lat = Lat;
    this.lng = Lng;
    this.name = Name;
    this.date = Date;
}

function initializeMap(){
    var mapOptions = {
        center: new google.maps.LatLng(41.888904, -87.624364),
        zoom: 13,
        
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        MapTypeControlOptions: false,
        MapTypeControlStyle: false,
        OverviewMapControlOptions: false,
        PanControlOptions: false,
        RotateControlOptions: false,
        ScaleControlOptions: false,
        ScaleControlStyle: false,
        StreetViewControlOptions: false,
        ZoomControlOptions: false,
        ZoomControlStyle: false,
        ControlPosition: false,
        
        draggable: true,
        scrollwheel: true,
        zoomControl: false,
        keyboardShortcuts: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    MAP = new google.maps.Map($("#googleMap")[0], mapOptions);
}

function initializeRestaurants(){
    var PPig = new restaurant(41.891132, -87.624490, "The Purple Pig", "21 November 2012");
    RESTAURANTS.push(PPig);
    var CCut = new restaurant(41.888164, -87.632925, "Chicago Cut Steakhouse", "22 November 2014");
    RESTAURANTS.push(CCut);
    var Jelly = new restaurant(41.901116, -87.627424, "Jellyfish", "October 2014");
    RESTAURANTS.push(Jelly);
    var Nico = new restaurant(41.901003, -87.627570, "Nico Osteria", "November 2014");
    RESTAURANTS.push(Nico);
    var Bandera = new restaurant(41.891873, -87.623683, "Bandera", "Spring 2013");
    RESTAURANTS.push(Bandera);
    var Volare = new restaurant(41.891661, -87.622506, "Volare", "14 February 2013");
    RESTAURANTS.push(Volare);
    var GGoat = new restaurant(41.884172, -87.648003, "The Girl and The Goat", "October 2014");
    RESTAURANTS.push(GGoat);
    var Seasons = new restaurant(41.891607, -87.625584, "Seasons 52", "Spring 2014");
    RESTAURANTS.push(Seasons);
    var Eataly = new restaurant(41.892000, -87.626266, "Eataly", "ALL DA TIMES");
    RESTAURANTS.push(Eataly);
    var Laredo = new restaurant(41.891119, -87.628264, "Cantina Laredo", "Winter 2013; Summer 2014");
    RESTAURANTS.push(Laredo);
    var Sunda = new restaurant(41.890938, -87.631716, "Sunda", "October 2014");
    RESTAURANTS.push(Sunda);
    var Atwood = new restaurant(41.883118, -87.628183, "Atwood", "Winter 2014");
    RESTAURANTS.push(Atwood);
    var Gage = new restaurant(41.881478, -87.624912, "The Gage", "ALL DA TIMES");
    RESTAURANTS.push(Gage);
}

function setMarker(place){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(place.lat, place.lng)
    });
    marker.setMap(MAP);

    MARKERS.push(marker);

    var text = "<div class='infoWindow'><p class='restaurantName'>";
    text += place.name;
    text += "</p><p class='restaurantDate'>";
    text += place.date;
    text += "</p></div>";

    var infoWindow = new google.maps.InfoWindow({
        content: text,
        maxWidth: 200
    });

    INFOS.push(infoWindow);

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(MAP, marker);
    });
    google.maps.event.addListener(MAP, 'click', function(){
        infoWindow.close(MAP, marker);
    });
}

function setRestaurants(){
    for(var i = 0; i < RESTAURANTS.length; i++){
        setMarker(RESTAURANTS[i]);
    }
}

$(document).ready(function(){
    initializeMap();
    initializeRestaurants();
    setRestaurants();
});