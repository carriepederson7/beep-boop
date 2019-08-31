
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
  var digits = parseInt(input) +1 ;
  console.log(digits);
  // var numbers="";
  var output = [];
  // var textResponse = [];
  // var regex = /^[0-9]*$/;


    for(var i=0; i<digits; i++){
      if(i.toString().includes("3")){
        output.push("I'm sorry Dave");
      }else if (i.toString().includes("2")){
        output.push("Boop");
      }else if (i.toString().includes("1")){
        output.push("Beep");
      }else {
        output.push(i)
      }
    }

    return output;

  }

    //
    // digits.forEach(function(digit){
    //   if(regex.test(digit)){
    //     numbers.push(digit);
    //   }else{
    //     alert("Please enter a positive number.");
    //   }
    // });
    // for(var i=0; i<digits.length; i++){
    //   if(regex.test(digits[i]){
    //     numbers.push(digits);
    //   }else{
    //     alert("Please enter a number.");
    //   }
    //   break;
    // }





  // console.log(textResponse);

  // if (textResponse.includes("Sorry Dave")){
  //   output.push("I'm sorry Dave, I'm afraid I can't do that.")
  // }else if (textResponse.includes("Boop")){
  //   output.push("Boop")
  // }else if(textResponse.includes("Beep")){
  //   output.push("Beep")
  // }else{
  //   output.push(numbers.join(""))
  // }

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
