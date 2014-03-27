describe("My Calculator", function() {
    //basic operation tests
    it("should add number ", function () {
        expect(Calculator.addNumber(10,10)).toBe(20);
    })
    it("should subtract number ", function () {
        expect(Calculator.subtractNumber(10,10)).toBe(0);
    })
    it("should multiply number ", function () {
        expect(Calculator.multiplyNumber(10,10)).toBe(100);
    })
    it("should divide number ", function () {
        expect(Calculator.divideNumber(10,10)).toBe(1);
    })
    it("should deal with divide zero ", function () {
        expect(function () { Calculator.divideNumber(0,10) }).toThrow(new Error("Divide by zero Error"));
    })
    
    //handle non-numerics
    it("addition should be able to deal with strings", function () {
        expect(function () { Calculator.addNumber("hello",10) }).toThrow(new Error("Not a number"));
    })
    it("subtraction should be able to deal with strings", function () {
        expect(function () { Calculator.subtractNumber("hello",10) }).toThrow(new Error("Not a number"));
    })
    it("multiplication should be able to deal with strings", function () {
        expect(function () { Calculator.multiplyNumber("hello",10) }).toThrow(new Error("Not a number"));
    })
    it("division should be able to deal with strings", function () {
        expect(function () { Calculator.divideNumber("hello",10) }).toThrow(new Error("Not a number"));
    })

    //handle range
    it("addition should be able to deal with numbers too large", function () {
        expect(function () { Calculator.addNumber(2000000001,10) }).toThrow(new Error("Out of Range"));
    })
    it("addition should be able to deal with numbers too small", function () {
        expect(function () { Calculator.addNumber(-2000000001,10) }).toThrow(new Error("Out of Range"));
    })
    it("subtraction should be able to deal with numbers too large", function () {
        expect(function () { Calculator.subtractNumber(2000000001,10) }).toThrow(new Error("Out of Range"));
    })
    it("subtraction should be able to deal with numbers too small", function () {
        expect(function () { Calculator.subtractNumber(-2000000001,10) }).toThrow(new Error("Out of Range"));
    })
    it("multiplication should be able to deal with numbers too large", function () {
        expect(function () { Calculator.multiplyNumber(2000000001,10) }).toThrow(new Error("Out of Range"));
    })
    it("multiplication should be able to deal with numbers too small", function () {
        expect(function () { Calculator.multiplyNumber(-2000000001,10) }).toThrow(new Error("Out of Range"));
    })
    it("division should be able to deal with numbers too large", function () {
        expect(function () { Calculator.divideNumber(2000000001,10) }).toThrow(new Error("Out of Range"));
    })
    it("division should be able to deal with numbers too small", function () {
        expect(function () { Calculator.divideNumber(-2000000001,10) }).toThrow(new Error("Out of Range"));
    })
})