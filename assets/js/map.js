function loadMap() {
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(13.3525,74.7928),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
}