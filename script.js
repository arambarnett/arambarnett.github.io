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
               lat: 40.732472,
               lng: -73.981194,
               alt: 0,   

           },
           // Aram's Address
           name: 'coconut_palm_tree',
           location: { 
               lat: 33.973690,
               lng: -118.371050,
               alt: 30,
                 
           },
               // Will's Address
            name: 'coconut_palm_tree',
            location: {
                lat: 34.004490,
                lng: -118.448463,
                alt: 26,


           }
  
       },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let altitude = place.location.alt;
       
       


       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}; altitude: ${altitude};`);
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