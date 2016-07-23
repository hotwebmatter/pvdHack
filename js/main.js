var $ = require('jquery');

var url = 'https://na-georss.waze.com/rtserver/web/TGeoRSS?tk=ccp_partner&ccp_partner_name=Providence&format=JSON&types=traffic,alerts,irregularities&polygon=-71.440487,41.866467;-71.374741,41.858029;-71.375427,41.828744;-71.395512,41.810450;-71.373367,41.785033;-71.405811,41.764486;-71.445465,41.786057;-71.446238,41.801095;-71.489410,41.817281;-71.440487,41.866467;-71.440487,41.866467';


$(document).ready(function () {
  
  var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
  };
  
  L.geoJson(geojsonFeature).addTo(map);
  
  var myPoints = [{
    "type": "Point",
    "coordinates": [-104.99404, 39.75621]
}, {
    "type": "Point",
    "coordinates": [-104.99404, 39.75234]
}];
  
  $.ajax(url, {
    
    success: function (data) {
      console.log(data);
    },
  
    error: function (err) {
      console.log('oh noes');
    }
    
  })
});
