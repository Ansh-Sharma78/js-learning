(function chai(){ //named iife
    console.log(`DB CONNECTED`);
}) ();  //use ; to prevent Automatic Semicolon Insertion(ASI)bugs
  
( (name)=> {  //simple iife
    console.log(`DB CONNECTED TWO ${name}`); 
}) ('ansh');