describe("My Converter", function () {
    it("should convert imperial weight to metric", function () {
        expect(Converter.convertFromImperialToMetric(2.2)).toBe(1);
    })
    it("imperial to metric should be able to deal with strings", function () {

        expect(function () { Converter.convertFromImperialToMetric("hello") }).toThrow(new Error("Not a number"));
    })
    it("should convert metric weight to imperial", function () {
        expect(Converter.convertFromMetricToImperial(1)).toBe(2.2);

    })
    it("metric to imperial should be able to deal with strings", function () {

        expect(function () { Converter.convertFromMetricToImperial("hello") }).toThrow(new Error("Not a number"));
    })
})

