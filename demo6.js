
//Add reference to the widget modules in require()
require(["esri/map","esri/dijit/HomeButton","esri/dijit/Geocoder","dojo/domReady!"], function(Map,HomeButton,Geocoder) {
  map = new Map("map", {
    basemap: "topo",
    center: [-90.3,38.6], // long, lat
    zoom: 10,
    sliderStyle: "small"
  });
  //Create an instance of the HomeButton widget 
  //add a reference to the map, second parameter is where to attach the widget
  var home = new HomeButton({
    map:map
  },"home");
  home.startup();
  //Create an instance of the Geocoder widget
  //another parameter we can pass to Geocoder is autoComplete
  var geocoder = new Geocoder({
    map:map,
    autoComplete:true,
    value: "St. Louis, MO"
  },"geocoder");
  geocoder:startup(); 
});
