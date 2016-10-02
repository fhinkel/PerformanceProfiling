function plus(a, b) { return a + b; }

while(true) {
  for (var i = 0; i < 100000; i++) {
    plus(4, 5);
  }
  for (var i = 0; i < 100000; i++) {
    plus("hello", " world");
  }
  for (var i = 0; i < 100000; i++) {
    plus(2.5, 42);
  }
  for (var i = 0; i < 100000; i++) {
    plus(2.5, 42);
  }
  for (var i = 0; i < 100000; i++) {
    plus(4, 5);
  }
  for (var i = 0; i < 100000; i++) {
    plus("hello", " world");
  }
  for (var i = 0; i < 100000; i++) {
    plus(12, 2.5);
  }
  for (var i = 0; i < 100000; i++) {
    plus(3);
  }
  for (var i = 0; i < 100000; i++) {
    plus("2", " world");
  }
  for (var i = 0; i < 100000; i++) {
    plus(111, " world");
  }
  for (var i = 0; i < 100000; i++) {
    plus({}, []);
  }
  for (var i = 0; i < 100000; i++) {
    plus([1], [2,3,4]);
  }
  for (var i = 0; i < 100000; i++) {
    plus([2,3,4],2.5, 42);
  }
  for (var i = 0; i < 100000; i++) {
    plus([2,3,4], 4, 5);
  }
  for (var i = 0; i < 100000; i++) {
    plus([2,3,4], "hello", " world")
  }
  for (var i = 0; i < 100000; i++) {;
    plus([2,3,4], 12, 2.5);
    plus([2,3,4]);
  }
  for (var i = 0; i < 100000; i++) {
    plus([2,3,4], "2", " world");
  }
  for (var i = 0; i < 100000; i++) {
    plus([2,3,4], 111, " world");
  }
  for (var i = 0; i < 100000; i++) {
    plus([2,3,4], {}, []);
  }
  for (var i = 0; i < 100000; i++) {
    plus([1], [2,3,4]);
  }
}