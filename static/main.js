window.onload = function() {
    var popup = L.popup(),
      geocode,
        map;
    var map = L.map('map', {
          layers: MQ.mapLayer(),
          center: [44.048489, -123.088916],
          zoom: 13
    }).on('click', function(e) {
          popup.setLatLng(e.latlng).openOn(this);
          geocode.reverse(e.latlng);
      });
    
    geocode = MQ.geocode().on('success', function(e) {
          popup.setContent(geocode.describeLocation(e.result.best));
    });


        L.marker([ 44.051583,-123.092856 ])
            .addTo(map)
            .bindPopup('<strong> Doc\'s Pad </strong> is located here.')
                .openPopup()
        L.marker([ 44.057198,-123.032979 ])
            .addTo(map)
            .bindPopup('<strong> JX Pop Karaoke </strong> is located here.')
                .openPopup()
        L.marker([ 44.037643,-122.987217 ])
            .addTo(map)
            .bindPopup('<strong> Caught-In-The-Act </strong> is located here.')
                .openPopup()
       function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
           }
       }
       function showPosition(position) {
        L.marker([position.coords.latitude ,position.coords.longitude ])
            .addTo(map)
            .bindPopup('<strong>I\'m here</strong>')
            .openPopup()
       } 
       getLocation();
}
