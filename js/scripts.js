//Once we've found all the threes, we want to break the loop.

function findThrees(input){
    var threes = [];
    // console.log(threes);
    for(var i= 0; i>=threes.length; i++){
      if (input[i] === 3){
        threes.push(input[i]);
      }else{
        break;
      }

    }
    console.log(threes);
}

function add(new_element){
	let arr = [1,2,3,4,5];
	for(let i=0;i<arr.length;i++)
	{
		arr.push(new_element);
	}

	return arr;
}
