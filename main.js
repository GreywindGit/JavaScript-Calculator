function main() {
  var $operation = null;
  var $equalPressed = false;
  $('.num-button').on('click', function() {
    if(document.getElementById('display').value === '0' || $equalPressed) {
        document.getElementById('display').value = $(this).html();
        $equalPressed = false;
    }
    else {
        document.getElementById('display').value += $(this).html();
    }
  })
  $('.operator-button').on('click', function() {
        if(!$operation || $equalPressed) {
            document.getElementById('display').value += $(this).html();
            $equalPressed = false;
        }
        else {
            document.getElementById('display').value = document.getElementById('display').value.slice(0, document.getElementById('display').value.indexOf($operation)) + $(this).html();
        }
        $operation = $(this).html();
  })
  $('#btn-equal').on('click', function() {
	var $operationString = document.getElementById('display').value;
	var $operandOne = 0;
	var $operandTwo = 0;
	var $result = 0;
	var $operationIndex = $operationString.indexOf($operation);
	if($operationIndex !== -1) {
  	$operandOne = parseFloat($operationString.slice(0, $operationIndex));
  	$operandTwo = parseFloat($operationString.slice($operationIndex + 1));
  	if(isNaN($operandTwo)) {
    	$operandTwo = $operandOne;
  	}
	}
	else {
  	$result = $operationString;
	}
	switch($operation) {
  	case '+':
    	$result = $operandOne + $operandTwo;
    	break;
  	case '-':
    	$result = $operandOne - $operandTwo;
    	break;
  	case '*':
    	$result = $operandOne * $operandTwo;
    	break;
  	case '/':
    	if($operandTwo === 0) {
      	    alert('You cannot divide by zero.');
    	}
    	else {
            $result = $operandOne / $operandTwo;
    	}
    	break;
    case '%':
        if($operandTwo === 0) {
            alert('You cannot divide by zero.');
        }
        else {
            $result = $operandOne % $operandTwo;
        }
  	default:
    	break;
	}
	document.getElementById('display').value = $result;
	$operation = null;
    $equalPressed = true;
  })
  $('#btn-clear-all').on('click', function() {
	document.getElementById('display').value = '0';
    $operation = null;
  })
	$('#btn-clear-one').on('click', function() {
	var $operationString = document.getElementById('display').value;
	var $operationIndex = $operationString.indexOf($operation);
	if($operationIndex !== -1) {
  	document.getElementById('display').value = $operationString.slice(0, $operationIndex + 1);
	}
	else {
  	document.getElementById('display').value = $operationString;
	}
  })
}
 
 
$(document).ready(main);
