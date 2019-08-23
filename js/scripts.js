
// UI Logic

$(document).ready(function(){
  $("#beep-boop").submit(function(event){
  event.preventDefault();
  var input = $("#inputNumber").val();
  var result = findThrees(input);
  $("#result").append("<li>" + result "</li>");


});
});

// Business Logic

function findThrees(input) {
  var numbers = input.split("");

  for(var i=0; i<numbers.length; i++) {
    if(numbers[i]=== "3"){
      return "Sorry Dave."
    }else if (numbers[i]==="2"){
      return "beep"
    }else if (numbers[i] === "1")
    return "boop"
    }else {
    return numbers;
    }
  }
};


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
