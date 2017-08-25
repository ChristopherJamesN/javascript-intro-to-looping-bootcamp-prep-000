
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if i === 1 {
    array[i] = "I am one strange loop.";
  } else {
    array[i] = "I am ${i} strange loops.";
    }
  }
  return array;
}

function whileLoop(n) {
  while (n>0){
    console.log(n);
  }
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.unshift();
  } while (array.length>0 && maybeTrue());

  return array;
}
