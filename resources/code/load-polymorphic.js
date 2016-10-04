function load(obj) {
  return obj.x;
}

var obj = {};
load(obj);

obj.a = 0; // change the shape of obj
load(obj);

obj.b = 0; // change the shape again
load(obj);

obj.c = 0; // change the shape again
load(obj);

obj.d = 0; // change the shape again
load(obj);