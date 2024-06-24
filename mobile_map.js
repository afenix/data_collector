// Load the AMD modules from the ESRI API
require(['esri/Map', 'esri/views/MapView', 'esri/config'], (Map, MapView, esriConfig) => {

    // Set the API key (make sure it's restricted to the domain of the application)
    esriConfig.apiKey = "AAPK83337061f79941cdbcba8ea16add7f1csWFIvmrzXU7TvesGSEbfGqhfxRivSP37KmfuCDfiec8kVrxhDCre40EzzsvFCLSB";

    // Create the map
    const map = new Map({
      basemap: 'streets-vector'
    })

    // Create the MapView object to be the reference node to serve as the html container for the map
    const view = new MapView({
      container: 'viewDiv', // Reference to the DOM node that will contain the view
      map: map // References the map object
    })

})
