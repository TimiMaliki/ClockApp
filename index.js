// first assignment on string  write a program to reverse a given string "funny" => "ynnuf"

// first method 'Chain'

let newStr = "Funny";
  let rStr = newStr.split('').reverse().join('');
   console.log(rStr);

   // second method 'loop'

   let str = '';
   for( let i = newStr.length -1; i >=0;i--){
str += newStr[i] ;
   }; 
   console.log(str);

   //second assignment on string write a program to convert this string [" Simple" "is" "better" "than" "complex"]

   let newWord = "Simple is better than complex"

   newString = newWord.split("");

   console.log(newString);

   //Third assignment on string write a program to get the last length of a string

   var firstName ="OluwaTimiLehin";
    lastLetterOfFirstName = firstName[firstName.length -1];
     console.log([lastLetterOfFirstName])

