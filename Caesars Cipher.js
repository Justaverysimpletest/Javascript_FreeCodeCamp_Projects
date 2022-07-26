//Caesars Cipher

/*One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.A common modern use is the ROT13 
cipher, where the values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.Write a function which takes a ROT13 encoded 
string as input and returns a decoded string.*/

function rot13(str) {
  var a ="";
  for (let i=0; i<str.length;i++){
    let b=str[i].charCodeAt();
    if(b>=65 &&b<=77){
      a=a + String.fromCharCode(b+13);
    }
    else if (b>=78 && b<=90){
      a=a + String.fromCharCode(b-13);
    }
    else{
      a= a + str[i]
    }
  }  
  return a;
}