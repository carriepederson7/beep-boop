
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
  console.log(numbers);
  var textResponse = [];
  var output = [];

  for(var i=0; i<numbers.length; i++) {
    if(numbers[i]=== "3"){
      textResponse.push("Sorry Dave");
    }else if (numbers[i]==="2"){
      textResponse.push("Boop");
    }else if (numbers[i] === "1"){
      textResponse.push("Beep");
    }else {
      // output.push(numbers[i]);
    }
  }

  for (var i=0; i<textResponse.length; i++){
    if(textResponse[i] === "Sorry Dave"){
      output.push("I'm sorry Dave.")
    }else if (textResponse[i] === "Boop"){
      output.push("Boop.")
    }else if (textResponse[i] === "Beep"){
      output.push("Beep.")
    }else{
    }

    console.log(textResponse);
    console.log(output);
    return output

  }



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
