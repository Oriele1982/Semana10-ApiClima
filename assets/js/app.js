$(document).ready(function(){

	var resumen = $('#resumen');
	var imagen = $('.img-responsive');
	var escondido = $('#escondido');

	var url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
	var key = 'e13fc8c9ff2687b5d99c22c9ec0c84b9';
	var coords = {
		scl: '-33.4488897,-70.6692655',
		ccp: '-36.8201352,-73.0443904',
		ari: '-18.4782534,-70.31259879999999',
		vld: '-39.8195857,-73.2452103',
		idp: '-27.112723,-109.34968650000002',
		lsr: '-29.9026691,-71.25193739999997',
	}

	var queryParams =['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es' , 'units=auto'];

	var image = {
		'clear-day':'http://www.bongo.kz/wp-content/uploads/2015/11/sun-icon1.png',
		'clear-night':'https://image.freepik.com/iconen-gratis/islamitische-halve-maan-met-kleine-ster_318-35693.jpg',
		'rain':'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/cloud_rain.png',
		'snow':'https://i.ebayimg.com/images/g/J5cAAOxyn~pR0ZOE/s-l300.jpg',
		'cloudy':'https://image.freepik.com/free-icon/cloudy-weather-ios-7-symbol_318-38966.jpg',

	}

	$('#select').on('change', function(){
		$.ajax({
			url: url + key + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
			method: 'GET'
			}).then(function(data) {
			escondido.removeAttr('hidden');
			resumen.text(parseInt(data.currently.temperature) + '°' + data.currently.summary);
			imagen.attr('src', image[data.currently.icon]);
		});
	})
});

	var map;
      function initMap() {
      	var myLatLng = {lat: -35.675147, lng: -71.54296899999997};
      	var scl = {'lat': -33.4488897,'lng': -70.6692655};
		var ccp = {'lat': -36.8201352,'lng': -73.0443904};
		var ari = {'lat': -18.4782534,'lng': -70.31259879999999};
		var vld = {'lat': -39.8195857,'lng': -73.2452103};
		var idp = {'lat': -27.112723,'lng': -109.34968650000002};
		var lsr = {'lat':-29.9026691,'lng': -71.25193739999997};

        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 8
        });

        //  var marker = new google.maps.Marker({
        //   position: ccp;
        //   map: map,
          
        // });        
	
	$("#select").on("change", function(){
		if ($(this).val()=="ccp") {
			map.setCenter(ccp);
			map.Marker(ccp);
		}
		if ($(this).val()=="scl") {
			map.setCenter(scl);
			map.Marker(scl);
		}
		if ($(this).val()=="ari") {
			map.setCenter(ari);
			map.Marker(ari);
		}
		if ($(this).val()=="vld") {
			map.setCenter(vld);
			map.Marker(vld);
		}
		if ($(this).val()=="idp") {
			map.setCenter(idp);
			map.Marker(idp);
		}
		if ($(this).val()=="lsr") {
			map.setCenter(lsr);
			map.Marker(lsr);
		}
	})
     
};
    



	     

    