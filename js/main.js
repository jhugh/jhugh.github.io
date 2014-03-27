window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 20 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 30 } },
        narrow: { range: '681-1199', containers: 960 },
        mobile: { range: '-680', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

// non-jQuery JS functions
document.addEventListener("DOMContentLoaded", function(event) { 
    var iElem = document.getElementById('ninput');    // get number to add/subtract/multiply/divide
    var oElem = document.getElementById('noutput');   // get number to be operated on
    document.getElementById('addbutton').onclick = function() {
        var inum = iElem.value; 
        var onum = parseFloat(oElem.value); 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            oElem.value =  Calculator.addNumber(inum,onum);
        }
    };

    document.getElementById('subtractbutton').onclick = function() {
        var inum = iElem.value; 
        var onum = parseFloat(oElem.value); 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            oElem.value =  Calculator.subtractNumber(inum,onum);
        }
    };

    document.getElementById('multiplybutton').onclick = function() {
        var inum = iElem.value;
        var onum = parseFloat(oElem.value); 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            oElem.value =  Calculator.multiplyNumber(inum,onum);
        }
    };

    document.getElementById('dividebutton').onclick = function() {
        var inum = iElem.value; 
        var onum = parseFloat(oElem.value); 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            oElem.value =  Calculator.divideNumber(inum,onum);
        }
    };

    document.getElementById('clearbutton').onclick = function() {
        iElem.value = "";
        oElem.value = 0;
    };
    
    document.getElementById('btn0').onclick = function() {
       putNum('0');
    };
    
    document.getElementById('btn1').onclick = function() {
       putNum('1');
    };

    document.getElementById('btn2').onclick = function() {
       putNum('2');
    };

    document.getElementById('btn3').onclick = function() {
       putNum('3');
    };
    document.getElementById('btn4').onclick = function() {
       putNum('4');
    };
    document.getElementById('btn5').onclick = function() {
       putNum('5');
    };
    document.getElementById('btn6').onclick = function() {
       putNum('6');
    };
    document.getElementById('btn7').onclick = function() {
       putNum('7');
    };
    document.getElementById('btn8').onclick = function() {
       putNum('8');
    };
    document.getElementById('btn9').onclick = function() {
       putNum('9');
    };
    document.getElementById('btndot').onclick = function() {
       putNum('.');
    };    
    
});

var putNum = function(digit) {
    if (document.getElementById('ninput').value.length == 0 ) {
        document.getElementById('ninput').value = digit;
    }
    else {
        document.getElementById('ninput').value = parseFloat(document.getElementById('ninput').value.toString() + digit);
    }
};

    



