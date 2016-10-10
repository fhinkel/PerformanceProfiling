##  Inline Caches

Fast path for property access. 

Cache the fast path for "similar" objects at call site. 

ICs can have different states: 
* monomorphic: 1 kind of object
* polymorphic: up to 4 kinds of objects
* megamorphic: up to 2500, shared with all call sites


note:

For every `obj.x`, the VM needs to call into the runtime to load and 
store the property. (prototype, accessors, ...). Loads/stores learn
and can make loads from similarly structured objects faster. 

ICs can be actually applied to virtually any operation with a 
dynamic behavior as long as you can figure out a 
meaningful fast path.