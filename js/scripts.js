
//factorials
var baseNumbers = []
var total = 1;

$(document).ready(function(){
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
});
