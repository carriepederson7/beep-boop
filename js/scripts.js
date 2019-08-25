
// UI Logic

$(document).ready(function(){
  $("#beep-boop").submit(function(event){
  event.preventDefault();
  var input = $("#inputNumber").val();
  var result = findThrees(input);
  $("#result").append("<br>" + "<li>" + result +"</li>");


});
});

// Business Logic

function findThrees(input) {
  var numbers = input.split("");
  var output = [];

  for(var i=1; i<numbers.length; i++) {
    if(numbers[i]=== "3"){
      output.push("Sorry Dave.");
    }else if (numbers[i]==="2"){
      output.push("Beep.");
    }else if (numbers[i] === "1"){
      output.push("Beep.");
    }else {
      output.push(numbers.length);
    }
  }
  return output;
}


  // numbers.forEach(number){
  //   if (number === "3"){
  //     return "sorryDave";
  //   }else if (number === "2" ){
  //     return "beep";
  //   }else if (number === "1"){
  //     return "boop";
  //   }else{
  //     return numbers;
  //   };
