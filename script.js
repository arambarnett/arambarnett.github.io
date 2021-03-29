window.onload = () => {

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           // nam's address
           name: 'T1',
           location: {
               lat: 40.7438966,
               lng: -73.9928782,
                 

           },
           // Aram's Address
           name: 'T1',
           location: { 
               lat: 33.973690,
               lng: -118.371050,
               
                 
           },
               // Will's Address
            name: 'T1',
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
       model.setAttribute('gltf-model', './assets/T1/scene.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '1 1 1');


       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}