/* ============================================================================
	Server side Controller intended to perform Arthimetic operations on Roman Numerals
============================================================================ */
'use strict';

//Modules Required or Dependencies
var toArabic = require('roman-numerals').toArabic;
var toRoman  = require('roman-numerals').toRoman;

module.exports = {

    findResult:function(req, res) { //Deals with basic validations,calculations and generating results

		/****Sample data****/
		// route /api/v1/calculate
		// raw:JSON(application/json)
		//{"left_operand":"XI","arthimetic_operator":"+","right_operand":"IV"}

		var leftOperand        = req.body.left_operand;
		var arthimeticOperator = req.body.arthimetic_operator;
		var rightOperand       = req.body.right_operand;

		var initialResult,finalResult;

		function isRoman(n) { // Function for roman validation 
      		return /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(n);
    	}

    	//Basic Validations

    	if (!leftOperand || !isRoman(leftOperand)) {
    		return res.status(300).send(300, { error: 'No leftOperand Provided or leftOperand invalid'});
    	}

    	if (!rightOperand || !isRoman(rightOperand)) {
    		return res.status(300).send(300, { error: 'No rightOperand Provided or rightOperand invalid'});
    	}
    	if (!arthimeticOperator) {
    		return res.status(300).send(300, { error: 'No arthimeticOperator Provided'});
    	}

    	var leftArabic  = toArabic(leftOperand);
    	var rightArabic = toArabic(rightOperand);

    	switch(arthimeticOperator){ //Deals with switching cases based on operator

    		case '+': initialResult = leftArabic + rightArabic;
    				  finalResult   = toRoman(initialResult);
    				  res.json({result:finalResult});
    				  break;
    		case '-': initialResult = leftArabic - rightArabic;
    				  finalResult   = toRoman(initialResult);
    				  res.json({result:finalResult});
    				  break;
    		case '*': initialResult = leftArabic * rightArabic;
    				  finalResult   = toRoman(initialResult);
    				  res.json({result:finalResult});
    				  break;
    		case '/': initialResult = leftArabic / rightArabic;
    				  finalResult   = toRoman(initialResult);
    				  res.json({result:finalResult});
    				  break;
    		default:  return res.status(300).send(300, { error: 'Invalid ArthimeticOperator'});

    	}
    }
};