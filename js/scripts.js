
// UI Logic

$(document).ready(function(){
  $("#beep-boop").submit(function(event){
  event.preventDefault();
  var input = $("#inputNumber").val();
  var result = findThrees(input);
  $("#result").append(input);


});
});

//Business Logic

function findThrees(input) {
  var newArray = parseInt(input);
  var threes = [];

  for(var i= 0; i>=newArray.length; i++){
    if (newArray[i] === "3"){
      threes.push(newArray[i]);
    } else{
      return
    }
  }
}
// alert("ranloop");
