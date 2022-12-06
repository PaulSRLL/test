var size = 0;
var placement = 'point';
function categories_DracanBoundary_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Dracan Village':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,30,42,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Drakelow Park':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,123,182,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_DracanBoundary_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Type");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_DracanBoundary_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
