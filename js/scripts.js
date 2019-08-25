
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
  // console.log(numbers);
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

  // numbers= numberResult.join();

  console.log(textResponse);

  if (textResponse.includes("Sorry Dave" )){
    output.push("Im Sorry Dave.")
  }else if (textResponse.includes("Boop")){
    output.push("Boop")
  }else if(textResponse.includes("Beep")){
    output.push("Beep")
  }else{
    alert(numbers)
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
