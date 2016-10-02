##  Optimization and bail out

Not **Ahead of time** because we have not much information. Instead, 
optimize at runtime. Collect information while running, assume most likely 
type and generate optimized code for that case. 
Always recheck that your assumption still holds, otherwise **bail out** to
slow code again.
 
```js
function plus(a, b) { return a + b; }

plus(4, 5); // 9
plus("hello", " world"); // "hello world"
```


