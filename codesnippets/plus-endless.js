function plus(a, b) { return a + b; }

while(true) {
  for (var i = 0; i < 100000; i++) {
    plus(4, 5);
  }
  for (var i = 0; i < 100000; i++) {
    plus("hello", " world");
  }
}