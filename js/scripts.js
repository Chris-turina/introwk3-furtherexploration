
//factorials
var baseNumbers = []
var total = 1;
//prime sifting
var arrayPrime = [];

$(document).ready(function(){
  $("form#prime").submit(function(event){
    event.preventDefault();
    $("#displayPrime").text("")
    var userInputPrime = parseInt($("#userPrime").val());

    for (var i = 2; i <= userInputPrime; i++) {
      arrayPrime.push(i);
    }

    for (var i=0; i < arrayPrime.length; i++){
      var numberPrime = arrayPrime[i]
      for (j=2; j< i; j++){
        var modVar = numberPrime % j;
        if (modVar === 0 && j !== numberPrime) {
          //not a prime
        } else {
          $("#displayPrime").append("<li>" + numberPrime + "</li>");
        }
      }
      // var primeLoop = numberPrime % i;
      // if (primeLoop === 0 && i !== numberPrime) {
      //   alert("no");
      // } else {
      //   $("#displayPrime").append("<li>" + numberPrime + "</li>");
      // };

    };
    arrayPrime = [];
  });
//factorials
  $("form#factorials").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    for (var i=userInput;i>0;i--) {
      baseNumbers.push(i);
    };
    baseNumbers.forEach(function(baseNumber) {
      total *= baseNumber;
    });
    $("#display").text(total);
    total = 1;
    baseNumbers = [];

    //REGEX VERSION WITH INPUT TYPE=TEXT

    /*if(/[0-9]/g,userInput){
      for (var i=userInput;i>0;i--) {
        baseNumbers.push(i);
      };
      baseNumbers.forEach(function(baseNumber) {
        total *= baseNumber;
      });
      $("#display").text(total);
    } else {
      alert("Please enter an actual number");
    }
    total = 1;
    baseNumbers = [];*/
  });

  //Palindrome
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var userInputP = $("#userPalindrome").val();
    var arrP = userInputP.split("");
    arrP.reverse();
    var resultP = arrP.join("");
    if (userInputP === resultP) {
      $("#displayP").text("That is a Palindrome!")
    } else {
      $("#displayP").text("That is not a Palindrome.")
    }
  });
});
