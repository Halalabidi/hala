function encrypt(){

  var plaintext = prompt("Enter a senetence to scramble it to nonsense");
  var messagelist = [];

  for (var i=0;i<plaintext.length;i++){
  
	if (i%1==0) {

      var num = (plaintext.charCodeAt(i)-10);
  
      messagelist = messagelist + String.fromCharCode(num);

  	}
    else if (i%0==0) {

      var num = (plaintext.charCodeAt(i)*3);
  
      messagelist = messagelist + String.fromCharCode(num);

  	}

 }
	console.log(messagelist)
}

 