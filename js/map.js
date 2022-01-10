'use strict';

//===  map.js  start =========================================================






document.addEventListener('DOMContentLoaded', () => {

   // Карта Лифлет  старт ==============================================================

   // initialize the map on the "map" div with a given center and zoom
   // var map = L.map('map', {
   //    center: [51.505, -0.09],
   //    zoom: 13
   // });





   // Работает ============================================================================================
   // var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
   //    maxZoom: 20,
   //    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   // }).addTo(map);
   // Работает ============================================================================================

   // const map = L.map('map', { scrollWheelZoom: false }).setView([-29.50, 145], 3.5);
   // L.control.layers(basemaps).addTo(map);
   // basemaps.Topography.addTo(map);

   // L.tileLayer(
   //    'https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

   // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   //    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   //    maxZoom: 18,
   //    id: 'mapbox/streets-v11',
   //    tileSize: 512,
   //    zoomOffset: -1,
   //    accessToken: 'your.mapbox.access.token',
   // }).addTo(map);



   // googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
   //    maxZoom: 20,
   //    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']

   // });

   // создаем мркер 
   // const marker = L.marker(

   // );
   // const marker2 = L.marker(
   //    {
   //       lat: 35.33147,
   //       lng: 33.45626,
   //    },
   // );
   // и  размещаем его на карте 
   // marker.addTo(map);
   // marker2.addTo(map);


   // const marker = L.marker(
   //    {
   //       lat,
   //       lng,
   //    },

   // );


   const map = L.map('map',
      {
         scrollWheelZoom: false
      })
      // .on('load', () => {
      //    console.log('Карта инициализирована')
      // })
      .setView({
         // lat: 34.99967,
         lat: 35.15,
         // lng: 33.17996,
         lng: 33.17996,
         // layers: 'bluemarble',
         // attribution: '(c) NASA Blue Marble'
      }, 9.3);
   // Add OSM tile leayer to the Leaflet map.
   // L.tileLayer(
   //    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
   //    {
   //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   //    },
   // ).addTo(map);
   // Работает ============================================================================================
   // L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
   //    maxZoom: 20,
   //    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
   // }).addTo(map);

   //const Stadia_Outdoors = 
   // Работает ============================================================================================
   // var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
   //    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   //    subdomains: 'abcd',
   //    minZoom: 0,
   //    maxZoom: 20,
   //    ext: 'png'
   // }).addTo(map);
   // Работает ============================================================================================
   var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
   }).addTo(map);
   // Работает ============================================================================================
   // L.tileLayer.provider('Stamen.Watercolor').addTo(map);
   // Работает ============================================================================================
   // var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
   //    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   //    subdomains: 'abcd',
   //    minZoom: 1,
   //    maxZoom: 16,
   //    ext: 'jpg'
   // }).addTo(map);
   // Работает ============================================================================================
   const points = [
      {
         title: `  'Kyrenia Animal Rescue Centre' 
         Телефон: 8-888-888-8888 
         E-mail: priyt@cat.cy
         Любая дополнительная информацию.
                   `,
         lat: 35.34267301168355,
         lng: 33.45625781923776,
      },
      {
         title: `  'Hope for Homeless Cyprus' 
         Телефон: 8-888-888-8888 
         E-mail: priyt@cat.cy
         Любая дополнительная информацию.
                   `,
         lat: 35.12955433277057,
         lng: 33.2090654522451,
      },
      {
         title: 'FARC Famagusta Animal Rehoming Centre',
         title: `  'Aradippou DogShelter' 
         Телефон: 8-888-888-8888 
         E-mail: priyt@cat.cy
         Любая дополнительная информацию.
                   `,
         lat: 35.17671297442135,
         lng: 33.89021775240266,
      },
      {
         title: `  'Aradippou DogShelter' 
         Телефон: 8-888-888-8888 
         E-mail: priyt@cat.cy
         Любая дополнительная информацию.
                   `,
         lat: 35.01266298316925,
         lng: 33.5688676753122,
      },
      {
         title: `  'CopsCats Clinic/Charity Shop' 
         Телефон: 8-888-888-8888 
         E-mail: priyt@cat.cy
         Любая дополнительная информацию.
                   `,
         lat: 35.03065716324025,
         lng: 33.689717276953054,
      },
      {
         title: `  'Williams Safe Shelter House Animal Shelter' 
         Телефон: 8-888-888-8888 
         E-mail: priyt@cat.cy
         Любая дополнительная информацию.
                   `,
         lat: 34.8159173288401,
         lng: 33.130817378174896,
      },
      {

         title: `  'Hope For The Strays Rescue Cyprus' 
         Телефон: 8-888-888-8888 
         E-mail: priyt@cat.cy
         Любая дополнительная информацию.
                   `,
         lat: 34.7527554373432,
         lng: 32.897357920459605,
      },
      {
         title: `  'Alexs Farm of Strays Animal Rescue' 
                    Телефон: 8-888-888-8888 
                    E-mail: priyt@cat.cy
                    Любая дополнительная информацию.
           `,
         lat: 34.885790125644895,
         lng: 32.430439005029015,

      },
   ];

   points.forEach(({ lat, lng, title }) => {
      const marker = L.marker({
         lat,
         lng,
         title,
      });
      marker
         .addTo(map)
         .bindPopup(title);
   });

   // Слои работает  (три слоя) ==============================================================
   // const basemaps = {
   // StreetView: L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
   //    maxZoom: 20,
   //    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors '
   // }),
   //    StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }),
   //    Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'TOPO-WMS' }),
   //    Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'OSM-Overlay-WMS' })
   // };
   // L.control.layers(basemaps).addTo(map);
   // basemaps.Topography.addTo(map);
   // Слои работает ==============================================================



   // addProviderTiles("Stamen.TonerLite");

   // .addCircles(radius);
   // .radius
   // .color
   // .opacity
   // .fill
   // .fillColor
   // .label
   // .popup

   // L.control.layers({
   //    "Minimal": minimal,
   //    "Night View": midnight,
   // }, {
   //    "Motorways": motorways,
   //    "Cities": cities
   // })
   //    .addTo(map);


   // работает ==============================================
   // L.polygon([
   //    [51.509, -0.08],
   //    [51.503, -0.06],
   //    [51.51, -0.047],
   // ]).addTo(map);


   // marker
   //    .addTo(map)
   //    .bindPopup(title);
   // const marker = L.marker(
   //    {
   //       lat,
   //       lng,
   //    },

   // );


   // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   //    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   //    maxZoom: 18,
   //    id: 'mapbox/streets-v11',
   //    tileSize: 512,
   //    zoomOffset: -1,
   //    accessToken: 'your.mapbox.access.token'
   // }).addTo(map);
   // var map = L.map('map').setView([51.505, -0.09], 13);



   // Карта Лифлет  финиш   ==============================================================

});









