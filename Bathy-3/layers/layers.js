var wms_layers = [];
var lyr_BathyTEST_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bathy-TEST",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BathyTEST_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4201335.464423, 4110019.568364, 1993657.049252, 11317942.547229]
                            })
                        });

lyr_BathyTEST_0.setVisible(true);
var layersList = [lyr_BathyTEST_0];
