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


   // Assignment 2 Differences between var, let, and const
   

  // the keyword 'var'
  //  The scope of a var variable is functional scope.
  //  It can be updated and re-declared into the scope.
   //   It can be declared without initialization.
   //   It can be accessed without initialization as its default value is “undefined”.


   // the keyword 'let'
    //  	The scope of a let variable is block scope.
     //	It can be updated but cannot be re-declared into the scope.
     // It can be declared without initialization.
     //	It cannot be accessed without initialization, as it returns an error.

     // the keyword 'const'
     //	The scope of a const variable is block scope.
  //	It cannot be updated or re-declared into the scope.
 	//	It cannot be declared without initialization.
  //	It cannot be accessed without initialization, as it cannot be declared without initialization.

   function med(cap){
    let oneGram = new Number(1000);
    fourGram = oneGram * 4;
 totalNumberOfCapsule = fourGram / cap;
   }
   med(500)
    console.log(totalNumberOfCapsule);
 
  