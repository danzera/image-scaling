var x = 6;
var y = 4;

var a = function(b) {
  console.log('b input:', b);
  // a(b) returns function(c)
  return function(c) {
    console.log('c input:', c);
    return y + b + c;
  }
};

x = 2;
y = 5;

var fn = a(x);
/*
fn = function(c) {
  return y + 2 + c;
}
*/

x = 1;
y = 3;

// set 'unknown' so that fn(unknown) == 10
// fn(c) = y + 2 + c; --> y current equals 3
// fn(c) = 3 + 2 + c = 5 + c
var unknown = 5; // --> fn(unknown) = 5 + unknown = 10
console.log(fn(unknown));

function scaleImage(width, height, maxdim) {
  var scale = (width > height) ? (maxdim / width) : (maxdim / height);
  return [scale * width, scale * height];
}

console.log(scaleImage(.75, 1.25, 1));