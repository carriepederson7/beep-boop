
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
  var digits = input.split("");
  var numbers=[];
  var notNumber=[];
  var textResponse = [];
  var output = [];
  var regex = /^[0-9]*$/;
  // var newNumbers = parseInt(numbers);
  // console.log(numbers);
  console.log(notNumber);

digits.forEach(function(digit){
  if(regex.test(digit)){
  numbers.push(digit);
  }else{
  output.push("Please enter a positive number.");
  }
});
    //
    // for(var i=0; i<digits.length; i++){
    //   if(regex.test(digits[i]){
    //     numbers.push(digits);
    //   }else{
    //     alert("Please enter a number.");
    //   }
    //   break;
    // }

console.log(numbers);

  for(var i=0; i<numbers.length; i++) {
    if(numbers[i]=== "3"){
      textResponse.push("Sorry Dave");
    }else if (numbers[i]=== "2"){
      textResponse.push("Boop");
    }else if (numbers[i] === "1"){
      textResponse.push("Beep");
    }else {
    }
  }


  console.log(textResponse);

  if (textResponse.includes("Sorry Dave")){
    output.push("I'm sorry Dave, I'm afraid I can't do that.")
  }else if (textResponse.includes("Boop")){
    output.push("Boop")
  }else if(textResponse.includes("Beep")){
    output.push("Beep")
  }else{
    output.push(numbers.join(""))
  }

  // textResponse.length=10
  // for (var i=0; i<textResponse.length; i++){
  //   if(textResponse === "Boop" && "Beep" && "Sorry Dave"){
  //     output.push("I'm sorry Dave.")
  //   }else if (textResponse === "Boop" && "Beep"){
  //     output.push("Boop.")
  //   }else if (textResponse[i] === !"Beep" && !"Sorry Dave"){
  //     output.push("Beep.")
  //   }else{
  //
  //   }
  // }
    // console.log(textResponse);
    // console.log(output);

    return output[0];



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
