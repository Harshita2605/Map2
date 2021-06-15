let map;
let infoWindow;
let dataArr;
var gtype;
var colArr = [];

var map1;

var basemap = { lat: 20.59, lng: 78.96 };
var dhanbad = { lat: 23.84, lng: 86.55 };

var op = { zoom: 5, center: basemap };

function initMap() {
    initMap2(1);
}

function initMap2(flag) {
    //POPULATION
    map1 = new google.maps.Map(document.getElementById("map1"), op);
    popmap(flag);
}

function popmap(flag) {
    dhan(2, flag, map1);
}