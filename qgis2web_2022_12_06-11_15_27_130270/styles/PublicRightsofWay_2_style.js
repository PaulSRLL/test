var size = 0;
var placement = 'point';

var style_PublicRightsofWay_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
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
    
        function rules_PublicRightsofWay_2(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_PublicRightsofWay_2rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(4,255,37,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_PublicRightsofWay_2rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,183,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_PublicRightsofWay_2rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,132,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_PublicRightsofWay_2rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,66,120,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_PublicRightsofWay_2(feature, value);
        ;

    return style;
};
