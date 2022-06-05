const gedas = false;

function myFn(callback) {
  if (gedas) {
    console.log('gerai');
  } else {
    console.log('negerai');
  }
}
const gedas2 = 2;

myFn(gedas);
