var Converter = (function () {
    // private stuff goes here
    var conversionValue = 2.2;
    return {

        convertFromImperialToMetric: function (weight) {
            var num = parseFloat(weight);
            if (isNaN(num)) {
                throw new Error("Not a number");
            }
            return parseFloat( (num / conversionValue).toFixed(1));
        },

        convertFromMetricToImperial: function (weight) {
            var num = parseFloat(weight);
            if (isNaN(num)) {
                throw new Error("Not a number");
            }
            return parseFloat( (num * conversionValue).toFixed(1));
        }

    }


})();
