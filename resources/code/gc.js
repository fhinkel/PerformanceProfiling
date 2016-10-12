// Some simple 2D point class with distance helper function.
function Point(x, y) {
  this.x = x;
  this.y = y;
}
function distance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Some user of the Point class, computing the distance of (x, y) to the origin.
function distanceToOrigin(x, y) {
  const origin = new Point(0, 0);
  const point = new Point(x, y);
  return distance(point, origin);
}

// Warm up the feedback for all functions above.
print("--- Before warmup ---");
distanceToOrigin(42, 24);
distanceToOrigin(42, 24);
print("--- After warmup ---");

// Let's see.
%OptimizeFunctionOnNextCall(distance);
print(distanceToOrigin(42, 24));
print("--- After optimized ---");

// Manually trigger GC.
gc();

// Let's see again.
print(distanceToOrigin(2, 2));