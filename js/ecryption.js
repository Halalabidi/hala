function pigencr(plaintext){

var ciphertext="";

var wordlist=plaintext.split(" ");

for(var i=0; i< wordlist.length; i++);

if(wordlist[i].length > 2){

ciphertext = ciphertext + wordlist[i].substring(1,) + wordlist[i][0]+"ay ";

} 

    else {

ciphertext = ciphertext + wordlist[i] + " ";

}

return (ciphertext);

}

console.log(pigencr("hello my name is simon"));

or

function substring(message){

return(message.split(" "){2,})
}
console.log(substring("banana"))

