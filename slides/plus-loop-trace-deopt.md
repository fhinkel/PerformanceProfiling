##  --trace-deopt

```
$ node --trace-deopt plus.js 
[deoptimizing (DEOPT eager): begin 0x14697c9e56d1 <JS Function plus (SharedFunctionInfo 0x113b4985cdc9)> (opt #0) @1, FP to SP delta: 24, caller sp: 0x7fff5fbfeef8]
            ;;; deoptimize at 92: not a Smi
  reading input frame plus => node=4, args=3, height=1; inputs:
      0: 0x14697c9e56d1 ; [fp - 16] 0x14697c9e56d1 <JS Function plus (SharedFunctionInfo 0x113b4985cdc9)>
      1: 0x3a50f20e6ed1 ; [fp + 32] 0x3a50f20e6ed1 <JS Global Object>
      2: 0x113b4985cb91 ; [fp + 24] 0x113b4985cb91 <String[5]: hello>
      3: 0x113b4985cbb1 ; [fp + 16] 0x113b4985cbb1 <String[6]:  world>
      4: 0x3a50f20af0c9 ; [fp - 24] 0x3a50f20af0c9 <FixedArray[173]>
  translating frame plus => node=4, height=0
    0x7fff5fbfeef0: [top + 48] <- 0x3a50f20e6ed1 ;  0x3a50f20e6ed1 <JS Global Object>  (input #1)
    0x7fff5fbfeee8: [top + 40] <- 0x113b4985cb91 ;  0x113b4985cb91 <String[5]: hello>  (input #2)
    0x7fff5fbfeee0: [top + 32] <- 0x113b4985cbb1 ;  0x113b4985cbb1 <String[6]:  world>  (input #3)
    0x7fff5fbfeed8: [top + 24] <- 0x2c53d6b47614 ;  caller's pc
    0x7fff5fbfeed0: [top + 16] <- 0x7fff5fbfef20 ;  caller's fp
    0x7fff5fbfeec8: [top + 8] <- 0x3a50f20af0c9 ;  context    0x3a50f20af0c9 <FixedArray[173]>  (input #4)
    0x7fff5fbfeec0: [top + 0] <- 0x14697c9e56d1 ;  function    0x14697c9e56d1 <JS Function plus (SharedFunctionInfo 0x113b4985cdc9)>  (input #0)
[deoptimizing (eager): end 0x14697c9e56d1 <JS Function plus (SharedFunctionInfo 0x113b4985cdc9)> @1 => node=4, pc=0x2c53d6b47a86, caller sp=0x7fff5fbfeef8, state=NO_REGISTERS, took 0.129 ms]
[removing optimized code for: plus]
```