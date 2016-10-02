function load(obj) {
  return obj.x;
}

var obj = {};
for(var i = 0; i < 10000; i++) {
  load(obj);
}

obj.a = 3;
for(var i = 0; i < 10000; i++) {
  load(obj);
}

obj.b = 'b';
for(var i = 0; i < 10000; i++) {
  load(obj);
}

obj.c = [2];
for(var i = 0; i < 10000; i++) {
  load(obj);
}
