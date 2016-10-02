##  Inline Caches

"Fast path to quickly load object properties."

For every `obj.x`, the VM needs to call into the runtime to load and 
store the property. (prototype, accessors, ...). Loads/stores learn
and can make loads from similarly structured objects faster. 

ICs can have different states: 
* monomorphic
* polymorphic
* megamorphic


ICs can be actually applied to virtually any operation with a 
dynamic behavior as long as you can figure out a 
meaningful fast path.