var words = ['bubbles','ballons','heart','friendship','blue'];

var index = 0;
	function getWord(){
		var word = words[index];
		document.getElementById("output").innerText = word;
		index = index + 1;
		if(index === 4){
			index = 0;
		}
	}
