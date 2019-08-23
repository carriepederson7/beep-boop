
// UI Logic

$(document).ready(function(){
  $("#beep-boop").submit(function(event){
  event.preventDefault();
  var input = $("#inputNumber").val();
  var result = findThrees(input);
  // $("#result").append("<li>" + input "</li>");


});
});

//Business Logic

function findThrees(input) {
  var numbers = input.split("");
  var threes = [];
  var output = [];
  // var sorryDave = "I'm sorry Dave, I can't do that."
  // var beep = "beep"
  // var boop = "boop"
  console.log(numbers);
  console.log(threes);

  numbers.forEach(number){
    if (number === "3"){
      return "sorryDave";
    }else if (number === "2" ){
      return "beep";
    }else if (number === "1"){
      return "boop";
    }else{
      return numbers;
    };

  //
    }
  //     return
    }

  //
