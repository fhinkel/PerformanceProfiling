##  Optimization based on type

```js
function plus(a, b) { return a + b; }

for(var i = 0; i < 10000; i++) {
  plus(4, 5);
}
plus("hello", " world");
```