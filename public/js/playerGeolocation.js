var coords = {
  latitude: undefined,
  longitude: undefined
};

function queryGPStracker() {
  var options = {
    enableHighAccuracy: true
  };
  navigator.geolocation.getCurrentPosition(updatePlayerLocation, errorCallback, options);
}

function updatePlayerLocation(position) {
  setPlayerCoords(position);
  map.setCenter(coords.latitude, coords.longitude);
  updateMarkerPosition(player);
  console.log(player.coordinates);
  broadcastPlayerMovement(player);
  console.log(map.markers);
}

function errorCallback() {
  console.log("the geolocation function didn't load properly");
}

function setPlayerCoords(position) {
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;
  player.getLocation(coords);
}

function updateMarkerPosition(player) {
  removeCustomMarker(player);
  addCustomMarker(player);
}
