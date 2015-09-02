/*-----Script for loading map including markers to pin point locations------*/
/*-----Author: Scott Morrison-----*/
/*-----Last Updated: 20/8/2015-----*/

$(document).ready(function(){
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
	
	var locations = [
      ['Glasgow SE Foodbank', 55.840227, -4.2578874],
	  ['Glasgow SW Foodbank 1', 55.8439822, -4.2986155],
	  ['Glasgow SW Foodbank 2', 55.8256784, -4.3426862],
	  ['Glasgow SW Foodbank 3',55.8644076,-4.3147545],
	  ['Glasgow SW Foodbank 4',55.8463382,-4.343197],
	  ['Glasgow NE Foodbank',55.8482202,-4.1990146],
	  ['Rutherglen and Cambuslang Foodbank',55.8281922,-4.2136112],
	  ['Glasgow NW Foodbank 1',55.885697,-4.364597],
	  ['Glasgow NW Foodbank 2',55.8755583,-4.3247418]
	  
    ];
		var map = new google.maps.Map(document.getElementById('map-canvas'), {
          center: new google.maps.LatLng(55.8628, -4.2542),
          zoom: 11,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
        });
		
		var infowindow = new google.maps.InfoWindow();

		var marker, i;
	
		for (i = 0; i < locations.length; i++) {  
			marker = new MarkerWithLabel({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			labelContent: locations[i][0],
			labelAnchor: new google.maps.Point(22, 0),
			labelClass: "labels", // the CSS class for the label
			labelStyle: {opacity: 0.75}
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
		}
	
  
 
	
		
		

};
});