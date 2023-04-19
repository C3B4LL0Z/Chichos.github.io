var map = L.map('map').setView([3.487977,-76.493234], 100); // Crear el mapa con la vista inicial en las coordenadas especificadas

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // Agregar una capa de mosaico de OpenStreetMap al mapa

var marcador = L.marker([3.487977,-76.493234]).addTo(map);
marcador.bindPopup("Chicho's Asados y Comidas Rapidas"); 
