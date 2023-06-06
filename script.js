const myMap = {
    coordinates: [],
    map: {},
    markers:{},
    buildMap(){
        //map = L.map('map').setView([35.2271, -80.8431], 13);
        this.map = L.map('map', {
            center: this.coordinates,
            zoom: 11,
            });
        //tile layer
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
    
        //function to add geomarkers for desired locations in dropdown
        var marker = L.marker(this.coordinates).addTo(this.map);
    }
}
async function getCoords(){
    const pos = await new Promise((resolve, reject) => {
     navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    console.log(pos.coords.latitude)
    //35.2271° N, 80.8431° W
    let tempLat = 36.0968
    let tempLong = -79.2696
   
    // use this code to use SF as the address
    //return [tempLat, tempLong]
   
    // Use this code to use your address
     return [pos.coords.latitude, pos.coords.longitude]  
   }

async function loadMap(){
    const coords = await getCoords();
    console.log(coords);
    myMap.coordinates = coords;
    myMap.buildMap()
    
}
loadMap()