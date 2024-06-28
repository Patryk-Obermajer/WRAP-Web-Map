var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': '',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WinterRainAcceptancePotential_1 = new ol.format.GeoJSON();
var features_WinterRainAcceptancePotential_1 = format_WinterRainAcceptancePotential_1.readFeatures(json_WinterRainAcceptancePotential_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WinterRainAcceptancePotential_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WinterRainAcceptancePotential_1.addFeatures(features_WinterRainAcceptancePotential_1);
var lyr_WinterRainAcceptancePotential_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WinterRainAcceptancePotential_1, 
                style: style_WinterRainAcceptancePotential_1,
                popuplayertitle: "Winter Rain Acceptance Potential",
                interactive: true,
    title: 'Winter Rain Acceptance Potential<br><i>WRAP Class</i><br />\
    <img src="styles/legend/WinterRainAcceptancePotential_1_0.png" /> Class 1<br />\
    <img src="styles/legend/WinterRainAcceptancePotential_1_1.png" /> Class 2<br />\
    <img src="styles/legend/WinterRainAcceptancePotential_1_2.png" /> Class 3<br />\
    <img src="styles/legend/WinterRainAcceptancePotential_1_3.png" /> Class 4<br />\
    <img src="styles/legend/WinterRainAcceptancePotential_1_4.png" /> Class 5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_WinterRainAcceptancePotential_1.setVisible(true);
// var layersList = [lyr_OSMStandard_0,lyr_WinterRainAcceptancePotential_1];
var layersList = [lyr_OSMStandard_0,lyr_WinterRainAcceptancePotential_1];
lyr_WinterRainAcceptancePotential_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'fid_2': 'fid_2', 'DN_2': 'DN_2', 'WRAP Class': 'WRAP Class', 'path': 'path', });
lyr_WinterRainAcceptancePotential_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'fid_2': 'TextEdit', 'DN_2': 'TextEdit', 'WRAP Class': 'TextEdit', 'path': 'TextEdit', });
lyr_WinterRainAcceptancePotential_1.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'fid_2': 'hidden field', 'DN_2': 'hidden field', 'WRAP Class': 'header label - always visible', 'path': 'hidden field', });
lyr_WinterRainAcceptancePotential_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
const opacityInput = document.getElementById('opacity-input');
const opacityOutput = document.getElementById('opacity-output');
function update() {
  const opacity = parseFloat(opacityInput.value);
  lyr_WinterRainAcceptancePotential_1.setOpacity(opacity);
  opacityOutput.innerText = opacity.toFixed(2);
}
opacityInput.addEventListener('input', update);
update();