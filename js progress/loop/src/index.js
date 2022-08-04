// while..loop

var count = 0;
document.write("start loop");
 while( count < 10){
    document.write ("Current Count : " + count + "<br />");
    count++;
 }
 document.write("stop loop");
 // the do.. loop

 var count = 0;
document.write("start loop : " + "");
do{
    document.write ("Current Count : " + count + "<br />");
    count++;
}
 while( count < 10){
   
    document.write("stop loop : " + "");
 }

 // the for.. loop
 var count = 0;
 document.write("start counting");
  for( count = 0; count < 30; count++){
 document.write("continue "  + count)
  }
  document.write("stop counting")

  //the for in..loop
// break control

var x = 1;
document.write("entering");
 while( x < 40){
  if(x == 5){
 continue;
  }
  x = x + 1;
   document.write( x + "" )
 }

 document.write("top");