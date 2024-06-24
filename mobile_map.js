// Load the AMD modules from the ESRI API
require(['esri/Map', 'esri/views/MapView', 'esri/config', 'esri/widgets/Locate', 'esri/widgets/Search', 'esri/widgets/Expand'], (Map, MapView, esriConfig, Locate, Search, Expand) => {

    // Set the API key (make sure it's restricted to the domain of the application)
    esriConfig.apiKey = "AAPK83337061f79941cdbcba8ea16add7f1csWFIvmrzXU7TvesGSEbfGqhfxRivSP37KmfuCDfiec8kVrxhDCre40EzzsvFCLSB";

    // Create the map
    const map = new Map({
      basemap: 'streets-vector'
    })

    // Create the MapView object to be the reference node to serve as the html container for the map
    const view = new MapView({
      container: 'viewDiv', // Reference to the DOM node that will contain the view
      map: map,
      center: [-105.0166, 39.6133], // The center of the map as lon/lat for Littleton, Colorado
      zoom: 13                      // Sets the zoom level of detail (LOD) to 13
    })

    // Create the locate widget
    const locateBtn = new Locate({
      view: view
    });

    // Add the locate widget to the top left corner of the view
    view.ui.add(locateBtn, {
      position: "top-left"
    });

    // Create the search widget
    const searchWidget = new Search({
      view: view
    });

    // Initialize and add the Expand widget to toggle the visibility of the Search widget
    const searchExpand = new Expand({
      expandIcon: "search",  // // Use a search icon for the expand/collapse button. See https://developers.arcgis.com/calcite-design-system/icons/
      expandTooltip: "Expand Search", // Custom tooltip text for the expand button
      view: view,
      content: searchWidget
    });
    view.ui.add(searchExpand, "top-left");


})
