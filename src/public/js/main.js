const map = L.map('map-template').setView([51.505, -0.09], 10);

const socket =io();

const tileUrl = ('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png');

L.tileLayer(tileUrl).addTo(map);

map.locate({enableHighAccuracy: true });
map.on('locationfound', e => {
    const coords=[e.latlng.lat+40, e.latlng.lng+40];
    const marker = L.marker(coords);
    marker.bindPopup('Helle There!!');
    map.addLayer(marker);
    socket.emit('userCordinates', e.latlng);
});

socket.on('newUserCoordinates', (coords) =>{

    console.log('New user is connected!!')
    const marker = L.marker([coords.lat, coords.lng]);
    marker.bindPopup('Helle There!!');
    map.addLayer(marker);
});
//const marker = L.marker([51.505, -0.09]);
//marker.bindPopup('estas aqui!!');
//map.addLayer(marker);