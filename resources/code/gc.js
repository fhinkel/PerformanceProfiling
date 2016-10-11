// Some simple 2D point class with distance helper function.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
// var point = new Point(4,4);

function distance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

var count = 0;

// Some user of the Point class, computing the distance of (x, y) to the origin.
function distanceToOrigin(x, y) {
  count++;
  const origin = new Point(0, 0);
  const point = new Point(x, y);
  var s = 'a'.repeat(count);
  point[s] = 1;
  return distance(point, origin);
}

// Warm up the feedback for all functions above.
print("--- Before warmup ---");
// Let's see.
print(distanceToOrigin(42, 24));
print(distanceToOrigin(42, 24));
// now we are in monomorphic state

print("--- After warmup ---");

print(distanceToOrigin(42, 24));
print(distanceToOrigin(42, 24));
print(distanceToOrigin(42, 24));
// now we are in polymorphic state
print(distanceToOrigin(42, 24));
// now megamorphic

// Manually trigger GC.
gc();

// Let's see again.
print(distanceToOrigin(2, 2));
// print(distanceToOrigin(2, 2));


// print(distanceToOrigin(42, 24.3));
// print(distanceToOrigin(42, 24));
// print(distanceToOrigin(2.2, 2.3));
// print(distanceToOrigin(42, 24));
// print(distanceToOrigin(2.2, 2));
// print(distanceToOrigin(2.2, 2));
// print(distanceToOrigin(2.2, "5"));
//
// print(distanceToOrigin(2.2));
// print(distanceToOrigin("2.2", 2));