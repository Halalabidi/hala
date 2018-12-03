function Loops1(){

    for (var i=1; i <=100; i++){
		if (i%3==0 && i%5==0) {
			console.log("Fizzbuzz");
	    }
        else if (i%3==0) {
	       console.log("Fizz");
        }

        else if (i%5==0) {

	       console.log("Buzz");
        }

        else{

        	console.log(i)
        }
    }

}

function Loops2(){

	for (var i = 1; i < 8; i++) {
		
        if (i==2){  
	        console.log("**");
        }

         else if (i==4) {

    	    console.log("****");
        }
         else if (i==5) {

    	    console.log("*****");

        }

         else if (i==6) {

    	   console.log("******");

	    }

	     else if (i==7) {

    	   console.log("*******");
        }

    }

}