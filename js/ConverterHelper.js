var ConverterHelper = (function () {
    // private stuff goes here
    return {
        calcByContext: function (id1, id2) {
            if ( isNaN(parseFloat(document.getElementById(id1).value)) == true) {
                document.getElementById(id1).value = Converter.convertFromMetricToImperial(document.getElementById(id2).value);
            }
            else {
                document.getElementById(id2).value = Converter.convertFromImperialToMetric(document.getElementById(id1).value);
            }
        }
    }
})();
