function load(obj) {
  return obj.x;
}

var obj = {};
load(obj);

obj.a = undefined; // change the shape of obj
load(obj);

obj.b = undefined; // change the shape again
load(obj);

obj.c = undefined; // change the shape again
load(obj);

obj.d = undefined; // change the shape again
load(obj);