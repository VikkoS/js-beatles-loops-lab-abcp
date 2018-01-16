function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var newArray = new Array();
  for (let i = 0; i < arrayMusicians.length; i++) {
    newArray[i] = arrayMusicians[i]+' plays '+arrayInstruments[i];
  }
  return newArray;
}

function johnLennonFacts(arrayFacts) {
 let n = 0;
  while( n < arrayFacts.length){
    arrayFacts[n] = arrayFacts[n]+'!!!';
    n++;
  }

  return arrayFacts;
}

function iLoveTheBeatles(n) {
  var newArray = new Array();
  do {
    newArray.push('');
  }
}