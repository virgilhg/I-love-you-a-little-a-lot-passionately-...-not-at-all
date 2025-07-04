// Solution is incorrect, challenge was time sensitive, but with more time I'd compute the correct index by wrapping around the 6-item list. Using the remainder operator (%) on nbPetals – 1 against arr.length so that every petal count, no matter how big, falls into the 0–5 index range.

function howMuchILoveYou(nbPetals) {
  let arr = ["I love you", "a little","a lot","passionately","madly","not at all"]
  if(arr.length < nbPetals){
    arr[nbPetals-1] = arr[0]
    return arr[nbPetals-1]
  }
  else{
    return arr[nbPetals-1]
  } 
}
