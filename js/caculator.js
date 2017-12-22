console.log('HIHI!!');

//다른 방법
/* function calculation(){
	console.log('calculator');
	var inputNumber1 = parseInt(document.getElementById('numberInput1').value);
	var inputNumber2 = parseInt(document.getElementById('numberInput2').value); 
	var select = document.getElementById("caculatorBox").value;
	var result = eval(inputNumber1+select+inputNumber2);
	console.log("inputNumber1 :" + inputNumber1);
	console.log("inputNumber2 :" + inputNumber2);
	console.log("select :" + select);
	console.log("result :" + result);
	
	document.getElementById('result').innerHTML= result;
}*/



function calculation(){
	console.log('calculator');
	var inputNumber1 = getValueOfTag('numberInput1');
	var inputNumber2 = getValueOfTag('numberInput2');
	var numOp = getOptionValue("caculatorBox");

	var result = 0;

	console.log("inputNumber1 :" + inputNumber1);
	console.log("inputNumber2 :" + inputNumber2);
	console.log("numOp :" + numOp);
	
	

	if(numOp==1) {
		result = plus(inputNumber1, inputNumber2);
	} else if(numOp==2) {
		result = minus(inputNumber1, inputNumber2);
	} else if(numOp==3) {
		result = multiple(inputNumber1, inputNumber2);
	} else if(numOp==4) {
		result = division(inputNumber1, inputNumber2);
	}


	printResult('result',result);

	console.log("result :" + result);
}

