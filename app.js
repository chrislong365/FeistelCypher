
var input= "";
var shiftBy;

$('#cypher').click(function(){
	shiftBy= Number($('#shiftBy').val());
	input= $('#toCypher').val();
	cypher();

});

function cypher (){
	var output="";
	var temp;
	for ( var i=0; i<input.length; i++) {
		if(input.charAt(i).charCodeAt(0)<64 || input.charAt(i).charCodeAt(0)>91 && 
			input.charAt(i).charCodeAt(0)<96 || input.charAt(i).charCodeAt(0)>123)
		{
			output= output.concat(input.charAt(i));
		}
		else
		{
			temp= input.charAt(i).charCodeAt(0);
			if (temp< 96)
			{
				temp= temp+ 32;
			}
			temp= temp+ shiftBy;
			if(temp>122)
			{
				temp=temp- 26;
			}
			output= output.concat(String.fromCharCode(temp));
		}
	}
	$('#cyphered').html(output);
}
