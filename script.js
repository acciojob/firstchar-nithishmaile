function firstChar(text) {
  // your code here
	text=text.trimStart()
	if(text==""){
		return ""
	}else{
		return text[0]
	}
}

// Do not change the code belo
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
