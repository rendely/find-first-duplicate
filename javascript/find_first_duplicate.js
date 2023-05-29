/*
First duplicate means the first number that comes up that has already been seen. 
As soon as we find it we can stop iterating
If no two numbers are the same we stop
Array could have differnt data types. we should check strictly so 2 !== '2'

We CANNOT  sort it first which makes checking easier, no need to store what we've checked so far in memory
and do a lookup. Requires us finding the first duplicate (hence keeping the order). 

Worst option is run a nested loop which is O(n^2)
Other option is keep a dict to track numbers we've already seen. O(n) 


*/

function findFirstDuplicate(arr) {
  if (arr.length < 2) return -1;

  const seenValues = {};

  for (el of arr){
    console.log(el, seenValues);
    console.log(el, seenValues);
    if (seenValues[el] !== undefined) return el;
    seenValues[el] = 1;
  }

  return -1

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
