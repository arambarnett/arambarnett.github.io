window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           // nam's address
           name: 'coconut_palm_tree',
           location: {
               lat: 35.1211305,
               lng: -89.9774153,
           },
           // Aram's Address
           name: 'coconut_palm_tree',
           location: {
               lat: 34.004490,
               lng: -118.448463,
           },
               // Will's Address
            name: 'coconut_palm_tree',
            location: {
                lat: 34.004490,
                lng: -118.448463,
           }
  
       },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/coconut_palm_tree/scene.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '1.0 1.0 1.0');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}