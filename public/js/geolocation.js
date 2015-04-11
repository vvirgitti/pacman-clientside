var coords = {
  latitude: undefined,
  longitude: undefined
};

var player = new Player();

var options = {
  enableHighAccuracy: true
}

$(document).ready(function() {
  setInterval(geolocatePlayer, 3000);
});

function geolocatePlayer() {
  navigator.geolocation.getCurrentPosition(updatePlayerLocation, errorCallback, options);
};

function updatePlayerLocation(position) {
  coords.latitude = position.coords.latitude
  coords.longitude = position.coords.longitude

  player.getLocation(coords);
  console.log(player.coordinates);
  
  map.removeMarkers();
  map.addMarker({
    lat: coords.latitude, 
    lng: coords.longitude
  });
  console.log(map.markers);
  map.setCenter(coords.latitude, coords.longitude)
};

function errorCallback() {
  console.log("the geolocation function didn't load properly")
};
