var output= "";
var input= "";
var left="";
var right="";
var rounds = 24;

$('#cypher').click(function(){
	input= $('#toCypher').val();

	left= input.substing[0,input.length];
	right= input.substing[input.length, input.length];
	cypher();

});

function cypher (){

	var temp="";

	for (var r= 0; r< rounds; r++){
		temp= right;
		right= XOR(left,f(right, r)) ;
		left= temp;
	}
	output= left.combcat(right);
	$('#cyphered').html(output);
}

function f(right, number){
	var temp;

	for (var j= 0; j< right.length; j++){
		temp= temp.concat(((right.indexOf(j)*256 +23)*12)%256);
	}
	return temp;
}