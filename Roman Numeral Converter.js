//Roman Numeral Converter

//Convert the given number into a roman numeral.

function convertToRoman(num) {
let  myList ={
1: 'I',
4: 'IV',
5: 'V',
9: 'IX',
10: 'X',
40: 'XL',
50: 'L',
90: 'XC',
100: 'C',
400: 'CD',
500: 'D',
900: 'CM',
1000: 'M',
};

let output='';
Object.keys(myList).reverse().forEach(key=>{
  while (key<=num){
    output= output + myList[key];
    num= num - key
  }
});  
 return output;
}