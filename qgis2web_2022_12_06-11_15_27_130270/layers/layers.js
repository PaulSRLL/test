var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DracanBoundary_1 = new ol.format.GeoJSON();
var features_DracanBoundary_1 = format_DracanBoundary_1.readFeatures(json_DracanBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DracanBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DracanBoundary_1.addFeatures(features_DracanBoundary_1);
var lyr_DracanBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DracanBoundary_1, 
                style: style_DracanBoundary_1,
                interactive: true,
    title: 'Dracan Boundary<br />\
    <img src="styles/legend/DracanBoundary_1_0.png" /> Dracan Village<br />\
    <img src="styles/legend/DracanBoundary_1_1.png" /> Drakelow Park<br />'
        });
var format_PublicRightsofWay_2 = new ol.format.GeoJSON();
var features_PublicRightsofWay_2 = format_PublicRightsofWay_2.readFeatures(json_PublicRightsofWay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicRightsofWay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicRightsofWay_2.addFeatures(features_PublicRightsofWay_2);
var lyr_PublicRightsofWay_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicRightsofWay_2, 
                style: style_PublicRightsofWay_2,
                interactive: true,
                title: 'Public Rights of Way'
            });
var format_SiteLocation_3 = new ol.format.GeoJSON();
var features_SiteLocation_3 = format_SiteLocation_3.readFeatures(json_SiteLocation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteLocation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteLocation_3.addFeatures(features_SiteLocation_3);
var lyr_SiteLocation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiteLocation_3, 
                style: style_SiteLocation_3,
                interactive: true,
                title: '<img src="styles/legend/SiteLocation_3.png" /> Site Location'
            });
var format_Schools_4 = new ol.format.GeoJSON();
var features_Schools_4 = format_Schools_4.readFeatures(json_Schools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_4.addFeatures(features_Schools_4);
var lyr_Schools_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Schools_4, 
                style: style_Schools_4,
                interactive: true,
    title: 'Schools<br />\
    <img src="styles/legend/Schools_4_0.png" /> College<br />\
    <img src="styles/legend/Schools_4_1.png" /> Nursery<br />\
    <img src="styles/legend/Schools_4_2.png" /> Primary School<br />\
    <img src="styles/legend/Schools_4_3.png" /> Secondary School<br />'
        });
var format_BusStops_5 = new ol.format.GeoJSON();
var features_BusStops_5 = format_BusStops_5.readFeatures(json_BusStops_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStops_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStops_5.addFeatures(features_BusStops_5);
var lyr_BusStops_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BusStops_5, 
                style: style_BusStops_5,
                interactive: true,
                title: '<img src="styles/legend/BusStops_5.png" /> Bus Stops'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DracanBoundary_1.setVisible(true);lyr_PublicRightsofWay_2.setVisible(true);lyr_SiteLocation_3.setVisible(true);lyr_Schools_4.setVisible(true);lyr_BusStops_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DracanBoundary_1,lyr_PublicRightsofWay_2,lyr_SiteLocation_3,lyr_Schools_4,lyr_BusStops_5];
lyr_DracanBoundary_1.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', });
lyr_PublicRightsofWay_2.set('fieldAliases', {'fid': 'fid', 'MI_STYLE': 'MI_STYLE', 'ROUTECODE': 'ROUTECODE', 'SITECODE': 'SITECODE', 'PARISH': 'PARISH', 'PROW_STATU': 'PROW_STATU', 'PROW_NUMBE': 'PROW_NUMBE', 'EMAIL_ENQU': 'EMAIL_ENQU', 'ENQUIRY_FO': 'ENQUIRY_FO', 'SECTION_LE': 'SECTION_LE', 'PATH_LENGT': 'PATH_LENGT', 'MI_PRINX': 'MI_PRINX', 'objectid_1': 'objectid_1', 'district': 'district', 'status': 'status', 'id': 'id', 'start_': 'start_', 'end': 'end', 'number_': 'number_', 'name': 'name', 'maintcat': 'maintcat', 'layer': 'layer', 'path': 'path', });
lyr_SiteLocation_3.set('fieldAliases', {'fid': 'fid', });
lyr_Schools_4.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Name': 'Name', });
lyr_BusStops_5.set('fieldAliases', {'fid': 'fid', 'Bus': 'Bus', });
lyr_DracanBoundary_1.set('fieldImages', {'fid': 'TextEdit', 'Type': 'TextEdit', });
lyr_PublicRightsofWay_2.set('fieldImages', {'fid': 'TextEdit', 'MI_STYLE': 'TextEdit', 'ROUTECODE': 'TextEdit', 'SITECODE': 'TextEdit', 'PARISH': 'TextEdit', 'PROW_STATU': 'TextEdit', 'PROW_NUMBE': 'TextEdit', 'EMAIL_ENQU': 'TextEdit', 'ENQUIRY_FO': 'TextEdit', 'SECTION_LE': 'TextEdit', 'PATH_LENGT': 'TextEdit', 'MI_PRINX': 'TextEdit', 'objectid_1': 'Range', 'district': 'TextEdit', 'status': 'TextEdit', 'id': 'Range', 'start_': 'TextEdit', 'end': 'TextEdit', 'number_': 'TextEdit', 'name': 'TextEdit', 'maintcat': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SiteLocation_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Schools_4.set('fieldImages', {'fid': 'TextEdit', 'Type': 'ValueMap', 'Name': 'TextEdit', });
lyr_BusStops_5.set('fieldImages', {'fid': 'TextEdit', 'Bus': 'TextEdit', });
lyr_DracanBoundary_1.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', });
lyr_PublicRightsofWay_2.set('fieldLabels', {'fid': 'no label', 'MI_STYLE': 'no label', 'ROUTECODE': 'no label', 'SITECODE': 'no label', 'PARISH': 'no label', 'PROW_STATU': 'no label', 'PROW_NUMBE': 'no label', 'EMAIL_ENQU': 'no label', 'ENQUIRY_FO': 'no label', 'SECTION_LE': 'no label', 'PATH_LENGT': 'no label', 'MI_PRINX': 'no label', 'objectid_1': 'no label', 'district': 'no label', 'status': 'no label', 'id': 'no label', 'start_': 'no label', 'end': 'no label', 'number_': 'no label', 'name': 'no label', 'maintcat': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SiteLocation_3.set('fieldLabels', {'fid': 'no label', });
lyr_Schools_4.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Name': 'no label', });
lyr_BusStops_5.set('fieldLabels', {'fid': 'no label', 'Bus': 'no label', });
lyr_BusStops_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});