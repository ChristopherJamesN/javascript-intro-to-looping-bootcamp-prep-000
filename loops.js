function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function forLoop(array) {
  var length = array.length
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array[i+length] = "I am one strange loop.";
    } else {
      array[i+length] = "I am ${i} strange loops.";
    }
  }
    return array;
  }


function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length > 0 && maybeTrue());

  return array;
}
