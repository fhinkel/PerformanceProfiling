##  bounds check
 
```c++
int a[5];
 
for (int i = 0; i < 5; i++) {
 a[i];
}
```

```js
for (var i = 0.0; i < 5; i++) {  // i not an integer
 a[i]; // could be out of bounds
}
```