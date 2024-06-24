// Load the AMD modules from the ESRI API
require([
  'esri/Map',
  'esri/views/MapView',
  'esri/config',
  'esri/widgets/Locate',
  'esri/widgets/Search',
  'esri/widgets/Expand',
  'esri/layers/FeatureLayer'
], (Map, MapView, esriConfig, Locate, Search, Expand, FeatureLayer) => {
  // Set the API key (make sure it's restricted to the domain of the application)
  esriConfig.apiKey =
    'AAPK83337061f79941cdbcba8ea16add7f1csWFIvmrzXU7TvesGSEbfGqhfxRivSP37KmfuCDfiec8kVrxhDCre40EzzsvFCLSB'

  // Create the map
  const map = new Map({
    basemap: 'arcgis-human-geography-dark'
  })

  // Create the MapView object to be the reference node to serve as the html container for the map
  const view = new MapView({
    container: 'viewDiv', // Reference to the DOM node that will contain the view
    map: map,
    center: [-98.5795, 39.8283], // The center of the map in longitude/latitude for the geographic center of the USA
    zoom: 3 // Zoom level to encompass the entire USA
  })

  // Create the locate widget
  const locateBtn = new Locate({
    view: view
  })

  // Add the locate widget to the top left corner of the view
  view.ui.add(locateBtn, {
    position: 'top-left'
  })

  // Create the search widget
  const searchWidget = new Search({
    view: view
  })

  // Initialize and add the Expand widget to toggle the visibility of the Search widget
  const searchExpand = new Expand({
    expandIcon: 'search', // // Use a search icon for the expand/collapse button. See https://developers.arcgis.com/calcite-design-system/icons/
    expandTooltip: 'Expand Search', // Custom tooltip text for the expand button
    view: view,
    content: searchWidget
  })
  view.ui.add(searchExpand, 'top-left')

  // Add a constructor for the FeatureLayer
  const survey123_Data = new FeatureLayer({
    // URL to the service
    url: 'https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/survey123_7cef333f16974c6e89ffcb820fa3bcb2_results/FeatureServer'
  })

  map.add(survey123_Data);




})
