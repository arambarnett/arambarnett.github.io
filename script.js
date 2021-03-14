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
               position= "0 30 0",

           },
           // Aram's Address
           name: 'coconut_palm_tree',
           location: {
               lat: 33.5825,
               lng: -118.2217,
               position= "0 30 0",
           },
               // Will's Address
            name: 'coconut_palm_tree',
            location: {
                lat: 34.004490,
                lng: -118.448463,
                position= "0 30 0",
    

           }
  
       },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let position = place.location.position;
       


       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute ('position', {x: 0, y: 30, z: 0});
       model.setAttribute('gltf-model', './assets/coconut_palm_tree/scene.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '1 1 1');


       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}