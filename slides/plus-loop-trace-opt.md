##  --trace-opt

```
$ node --trace-opt plus.js 
[disabled optimization for 0x1765ac1df661 <SharedFunctionInfo NativeModule.compile>, reason: TryFinallyStatement]
[disabled optimization for 0xa8a6eaf7271 <SharedFunctionInfo createUnsafeBuffer>, reason: TryFinallyStatement]
[didn't find optimized code in optimized code map for 0x133c1f20b809 <SharedFunctionInfo>]
[disabled optimization for 0x1765ac152d21 <SharedFunctionInfo Join>, reason: TryFinallyStatement]
[disabled optimization for 0x1765ac171bd1 <SharedFunctionInfo WeakMap>, reason: TryCatchStatement]
[disabled optimization for 0x133c1f232531 <SharedFunctionInfo>, reason: TryCatchStatement]
[didn't find optimized code in optimized code map for 0x133c1f213a81 <SharedFunctionInfo debugs.(anonymous function)>]
[disabled optimization for 0x1765ac170ac9 <SharedFunctionInfo Map>, reason: TryCatchStatement]
[didn't find optimized code in optimized code map for 0x133c1f213a81 <SharedFunctionInfo debugs.(anonymous function)>]
[disabled optimization for 0x133c1f22c121 <SharedFunctionInfo tryModuleLoad>, reason: TryFinallyStatement]
[disabled optimization for 0x133c1f2340c1 <SharedFunctionInfo tryStatSync>, reason: TryFinallyStatement]
[disabled optimization for 0x133c1f234181 <SharedFunctionInfo tryCreateBuffer>, reason: TryFinallyStatement]
[disabled optimization for 0x133c1f234241 <SharedFunctionInfo tryReadSync>, reason: TryFinallyStatement]
[marking 0x2982ed9e56c9 <JS Function plus (SharedFunctionInfo 0x133c1f25cd19)> for recompilation, reason: small function, ICs with typeinfo: 1/1 (100%), generic ICs: 0/1 (0%)]
[compiling method 0x2982ed9e56c9 <JS Function plus (SharedFunctionInfo 0x133c1f25cd19)> using Crankshaft]
[optimizing 0x2982ed9e56c9 <JS Function plus (SharedFunctionInfo 0x133c1f25cd19)> - took 0.030, 0.118, 0.026 ms]
[completed optimizing 0x2982ed9e56c9 <JS Function plus (SharedFunctionInfo 0x133c1f25cd19)>]
```