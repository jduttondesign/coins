document.getElementById("myBtn").addEventListener("click", function(){
   console.log("go");
   var input = document.getElementById("dollar_amount").value;
   console.log("input", input);
   
   d25 = 0.25;
   d10 = 0.10;
   d5 = 0.05;
   d1 = 0.01;
   remaining = 0;
      
   var message = "You want change for a dollar amount"+input+"<br />";
      
   var d25s = (input / d25).toFixed(2);
      
   remaining = (input % d25).toFixed(2);
   var d10s = (remaining / d10).toFixed(2);
      
   remaining = (remaining % d10).toFixed(2);
   var d5s = (remaining / d5).toFixed(2);
      
   remaining = (remaining % d5).toFixed(2);
   var d1s = (remaining / d1).toFixed(2);
      
   
   message += "20 D: &nbsp; "+Math.floor(d25s)+"<br />";
   message += "10 D: &nbsp; "+Math.floor(d10s)+"<br />";
   message += "5 D: &nbsp; "+Math.floor(d5s)+"<br />";
   message += "1 D: &nbsp; "+Math.floor(d1s)+"<br />";
      
      
   document.getElementById("output").innerHTML = message;
});




