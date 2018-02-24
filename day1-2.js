/* Day 1: Function */
function factorial(n){
	var result = n;
	var i = n;;
	while (i > 1) {
   		result = result * (i - 1);
  		i--;
   	}
	
	return result;
}
