// Copyright: Andoni M. Garcia. Food Blog. 2014

var RESTAURANTS = [];
var MARKERS = [];
var INFOS = [];
var MAP;
var CENTER = new google.maps.LatLng(41.888904, -87.624364);
var INFO_OPEN;
var MARKER_OPEN;

function restaurant(Lat, Lng, Name, Date){
    this.lat = Lat;
    this.lng = Lng;
    this.name = Name;
    this.date = Date;
}

function initializeMap(){
    var mapOptions = {
        center: CENTER,
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
    google.maps.event.addDomListener(MAP, 'idle', function(){
        CENTER = MAP.getCenter();
    });
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
    var Eataly = new restaurant(41.892000, -87.626266, "Eataly", "ALL THE TIME!");
    RESTAURANTS.push(Eataly);
    var Laredo = new restaurant(41.891119, -87.628264, "Cantina Laredo", "Winter 2013; Summer 2014");
    RESTAURANTS.push(Laredo);
    var Sunda = new restaurant(41.890938, -87.631716, "Sunda", "October 2014");
    RESTAURANTS.push(Sunda);
    var Atwood = new restaurant(41.883118, -87.628183, "Atwood", "Winter 2014");
    RESTAURANTS.push(Atwood);
    var Gage = new restaurant(41.881478, -87.624912, "The Gage", "ALL THE TIME!");
    RESTAURANTS.push(Gage);
    var Frontera = new restaurant(41.890499, -87.630970, "Frontera Grill","Spring 2014");
    RESTAURANTS.push(Frontera);
    var Mercadito = new restaurant(41.889210, -87.631583, "Mercadito", "Spring 2013");
    RESTAURANTS.push(Mercadito);
    var Fogo = new restaurant(41.894170, -87.632407, "Fogo de Chao", "Fall 2012");
    RESTAURANTS.push(Fogo);
    var Italian = new restaurant(41.880543, -87.630190, "Italian Village", "24 October 2012");
    RESTAURANTS.push(Italian);
    var Magnolias = new restaurant(41.883499, -87.628382, "Magnolia Bakery", "ALL THE TIME!");
    RESTAURANTS.push(Magnolias);
    var Malnati = new restaurant(41.871551, -87.627361, "Lou Malnati's Pizzeria", "26 September 2012; Spring 2013");
    RESTAURANTS.push(Malnati);
    var Yolk = new restaurant(41.868866, -87.624558, "Yolk!", "Spring 2013");
    RESTAURANTS.push(Yolk);
    var PorkChop = new restaurant(41.884005, -87.651499, "Prokchop", "Winter 2013");
    RESTAURANTS.push(PorkChop);
    var Cheesies = new restaurant(41.940029, -87.653843, "Cheesie's", "EVERY WEEKEND!");
    RESTAURANTS.push(Cheesies);
    var Goose = new restaurant(41.946493, -87.655688, "Goose Island Brewing Co", "Summer 2014");
    RESTAURANTS.push(Goose);
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
        if(INFO_OPEN){
            INFO_OPEN.close(MAP, MARKER_OPEN);
            INFO_OPEN = false;
            MARKER_OPEN = null;
        }
        infoWindow.open(MAP, marker);
        INFO_OPEN = infoWindow;
        MARKER_OPEN = marker;
    });
    google.maps.event.addListener(MAP, 'click', function(){
        infoWindow.close(MAP, marker);
        INFO_OPEN = false;
        MARKER_OPEN = null;
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