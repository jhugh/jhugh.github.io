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

var lastOperatorClicked="=" 
var opInProgress = false;
var num=0;
var mnum=0;

// non-jQuery JS functions
document.addEventListener("DOMContentLoaded", function(event) { 
    var iElem = document.getElementById('ninput');    // get number to add/subtract/multiply/divide
    if (iElem.value.length == 0) iElem.value = 0;
    
    document.getElementById('addbutton').onclick = function() {
        if (opInProgress) {
            var inum = iElem.value; 
            doCalc(inum,num);
        }
        num = parseFloat(iElem.value);
        opInProgress = false;
        lastOperatorClicked="+";
    };

    document.getElementById('subtractbutton').onclick = function() {
        if (opInProgress) {
            var inum = iElem.value; 
            doCalc(inum,num);
        }
        num = parseFloat(iElem.value);
        opInProgress = false;
        lastOperatorClicked="-";
    };

    document.getElementById('multiplybutton').onclick = function() {
        if (opInProgress) {
            var inum = iElem.value; 
            doCalc(inum,num);
        }
        num = parseFloat(iElem.value);
        opInProgress = false;
        lastOperatorClicked="*";
    };

    document.getElementById('dividebutton').onclick = function() {
        if (opInProgress) {
            var inum = iElem.value; 
            doCalc(inum,num);
        }
        num = parseFloat(iElem.value);
        opInProgress = false;
        lastOperatorClicked="/";
    };

    document.getElementById('equalsbutton').onclick = function() {
        var inum = iElem.value; 
        //var onum = parseFloat(oElem.value); 
        if (inum.length == 0) {
            alert("Please set a number in input field")
        }
        else {
            doCalc(inum,num);
            num = parseFloat(iElem.value);
            opInProgress = false;
            lastOperatorClicked="=";
        }
    };

    document.getElementById('clearbutton').onclick = function() {
        iElem.value = 0;
        num = 0;
        opInProgress = false;
    };
    
    document.getElementById('maddbutton').onclick = function() {
        mnum = mnum + parseFloat(iElem.value);
    };

    document.getElementById('msubtractbutton').onclick = function() {
        mnum = mnum - parseFloat(iElem.value);
    };
    
    document.getElementById('mreadbutton').onclick = function() {
        iElem.value = mnum;
    };
    
    document.getElementById('btn0').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('0');
    };
    
    document.getElementById('btn1').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('1');
    };

    document.getElementById('btn2').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('2');
    };

    document.getElementById('btn3').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('3');
    };
    document.getElementById('btn4').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('4');
    };
    document.getElementById('btn5').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('5');
    };
    document.getElementById('btn6').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('6');
    };
    document.getElementById('btn7').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('7');
    };
    document.getElementById('btn8').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('8');
    };
    document.getElementById('btn9').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('9');
    };
    document.getElementById('btndot').onclick = function() {
       if(!opInProgress) iElem.value = "";
       opInProgress = true;
       putNum('.');
    };    
    

});

var putNum = function(digit) {
    if (document.getElementById('ninput').value.length == 0 ) {
        document.getElementById('ninput').value = digit;
    }
    else {
        document.getElementById('ninput').value = document.getElementById('ninput').value.toString() + digit;
    }
};

var doCalc = function(inum,num) {            
    if (lastOperatorClicked == "+" ) document.getElementById('ninput').value =  Calculator.addNumber(inum,num);
    if (lastOperatorClicked == "-" ) document.getElementById('ninput').value =  Calculator.subtractNumber(inum,num);
    if (lastOperatorClicked == "*" ) document.getElementById('ninput').value =  Calculator.multiplyNumber(inum,num);
    if (lastOperatorClicked == "/" ) document.getElementById('ninput').value =  Calculator.divideNumber(inum,num);
};



