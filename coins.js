var coinPurseDOM = document.getElementById("getChange").innerHTML;


function getChange() {
    
 var input = prompt('Enter US dollar amount');   
 
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
    
 
 message += "20 D: &nbsp; "+Math.floor(d20s)+"<br />";
 message += "10 D: &nbsp; "+Math.floor(d10s)+"<br />";
 message += "5 D: &nbsp; "+Math.floor(d5s)+"<br />";
 message += "1 D: &nbsp; "+Math.floor(d1s)+"<br />";
    
    
 document.write(message);
    
}


var userInput = prompt("List an amount you want divided into coins. (eg: 1.67) ");
var userInputParsed = (parseFloat(userInput));
coinCounter(userInputParsed);

getChange();


/*function calculate_change () {

var input = prompt('Enter the amount');

var message = "You want to change " + input + "$, right?<br>";

//coins used in US...
var quarter = 0.25; 
var dime = 0.10; 
var nickel = 0.05;
var cent = 0.01; 

//calculating the change
var quarters = input/quarter;
var dimes = ((input%quarter).toFixed(2))/dime;
var nickels = ((((input%quarter).toFixed(2))%dime).toFixed(2))/nickel;
var cents = (((((input%quarter).toFixed(2)%dime).toFixed(2))%nickel).toFixed(2))/cent;

message += "Quarters: " + Math.floor(quarters) + "<br>"; 
message += "Dimes: " + Math.floor(dimes) + "<br>";
message += "Nickels: " + Math.floor(nickels) + "<br>";
message += "Cents: " + Math.floor(cents) + "<br>"; 

document.write(message);
} */

/*function denomination(coins, original_amount){
    var original_amount = original_amount;
    var original_best = [ ];

    for(var i=0;i<coins.length; i++){
      var amount = original_amount;
      var best = [ ];
      var tempBest = [ ]
      while(coins[i]<=amount){
        amount = amount - coins[i];
        best.push(coins[i]);
      }
      if(amount>0 && coins.length>1){
        tempBest = denomination(coins.slice(0,i).concat(coins.slice(i+1,coins.length)), amount);
        //best = best.concat(denomination(coins.splice(i,1), amount));
      }
      if(tempBest.length!=0 || (best.length!=0 && amount==0)){
        best = best.concat(tempBest);
        if(original_best.length==0 ){
          original_best = best
        }else if(original_best.length > best.length ){
          original_best = best;
        }  
      }
    }
    return original_best;  
  }
  denomination( [1,10,3,9] , 19 );*/

  /*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }



function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log(); */