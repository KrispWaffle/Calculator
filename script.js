var result = document.getElementById('result');

var operatorP = false
var operatorC
var value1 = false
var value2 = false
var tot = 0 
function clearResult() {
    
	result.innerHTML = 0;
	value1 = false;
	value2 = false;
	oper = '+';
	tot = 0;
	
	operatorP = false;
    console.log('cleared')
}



function num(val){
    val = val.toString();
    console.log(val)

    result.innerHTML = val

    if(!operatorP){
        if (!value1) value1 = 0 
        
		value1 = value1 + val;

		value1 = lengthFix(value1); // limiting to 12

		result.innerHTML = value1;
    }
    if(operatorP === true){
        if(!value2) value2 = 0
        
        value2 = value2 + val
        value2 = lengthFix(value2);
        result.innerHTML = value2
        console.log(value2)
        
        

    }
}
function lengthFix(o) {
	o = o.toString();

	if (o != 0 || o != '0') {
		if (o.charAt(0) == 0) o = o.slice(1);
	}

	if (o.toString().length > 12) o = o.substring(0, 12);

	return o;
}

function calc(val){
    console.log(val)
    
    operatorP = true; 
    operatorC = val;
    result.innerHTML = val;
    console.log(operatorP)
}

function total(){
    if(operatorC === '+'){
       result.innerHTML= +value1 + +value2;
    }else if(operatorC === '-'){
        result.innerHTML= value1-value2;
    }else if(operatorC === '*'){
        result.innerHTML= value1*value2;
    }else{
        result.innerHTML= value1/value2;
    }
}
