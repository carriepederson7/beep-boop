
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
  var newArray = parseInt(input);
  var sorryDave = "I'm sorry Dave, I can't do that."
  console.log(newArray);
  // var threes = [];

  for(var i= 0; i>=newArray.length; i++){
    if (newArray[i] === 3){
      return sorryDave;
    } else if (newArray[i] === 2){
      return

    }
      return
    }
  }

// alert("ranloop");
