##  Trace ICs

```
$ d8 --trace-ic load-polymorphic.js 
[StoreIC in ~PostExperimentals+556 at native prologue.js:1 (0->.) map=0x6b2c1b86ae1 0x2a44a05085e1 <String[6]: Export>]
[StoreIC in ~PostExperimentals+593 at native prologue.js:1 (0->.) map=0x6b2c1b89899 0x2a44a05087d1 <String[9]: PostDebug>]
[StoreIC in ~PostExperimentals+630 at native prologue.js:1 (0->.) map=0x6b2c1b898f1 0x2a44a05087a1 <String[17]: PostExperimentals>]
[StoreIC in ~+188 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:6 (0->.) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[CompareIC in ~+480 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:6 ((UNINITIALIZED+UNINITIALIZED=UNINITIALIZED)->(SMI+SMI=SMI))#LT @ 0x3596d7a1fa1]
[  patching ic at 0x3596d884adc, test=0x3596d884ae0, delta=21
[CallIC in ~+261 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:7 (0->1) map=0x0 0xe15f4ca8981 <String[4]: load>]
[LoadIC in ~load+64 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:2 (0->.) map=0x6b2c1b82c51 0x2a44a0509ad1 <String[1]: x>]
[BinaryOpIC(ADD:None*None->None) => (ADD:Smi*Smi->Smi) @ 0x3596d7b3e81 <- ~+339 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:6]
[  patching ic at 0x3596d884a4f, test=0x3596d884a53, delta=49
[StoreIC in ~+374 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:6 (0->.) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[LoadIC in ~load+64 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:2 (.->1) map=0x6b2c1b82c51 0x2a44a0509ad1 <String[1]: x>]
[StoreIC in ~+374 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:6 (.->1) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[StoreIC in ~+560 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:10 (0->.) map=0x6b2c1b82c51 0x2a44a0508559 <String[1]: a>]
[StoreIC in ~+599 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:11 (0->.) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[CompareIC in ~+891 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:11 ((UNINITIALIZED+UNINITIALIZED=UNINITIALIZED)->(SMI+SMI=SMI))#LT @ 0x3596d7a1fa1]
[  patching ic at 0x3596d884c77, test=0x3596d884c7b, delta=21
[CallIC in ~+672 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:12 (0->1) map=0x0 0xe15f4ca8981 <String[4]: load>]
[LoadIC in ~load+64 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:2 (1->P) map=0x6b2c1b89a51 0x2a44a0509ad1 <String[1]: x>]
[BinaryOpIC(ADD:None*None->None) => (ADD:Smi*Smi->Smi) @ 0x3596d7b3e81 <- ~+750 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:11]
[  patching ic at 0x3596d884bea, test=0x3596d884bee, delta=49
[StoreIC in ~+785 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:11 (0->.) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[StoreIC in ~+785 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:11 (.->1) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[StoreIC in ~+971 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:15 (0->.) map=0x6b2c1b89a51 0x2a44a0508579 <String[1]: b>]
[StoreIC in ~+1010 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:16 (0->.) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[CompareIC in ~+1302 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:16 ((UNINITIALIZED+UNINITIALIZED=UNINITIALIZED)->(SMI+SMI=SMI))#LT @ 0x3596d7a1fa1]
[  patching ic at 0x3596d884e12, test=0x3596d884e16, delta=21
[CallIC in ~+1083 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:17 (0->1) map=0x0 0xe15f4ca8981 <String[4]: load>]
[LoadIC in ~load+64 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:2 (P->P) map=0x6b2c1b89aa9 0x2a44a0509ad1 <String[1]: x>]
[BinaryOpIC(ADD:None*None->None) => (ADD:Smi*Smi->Smi) @ 0x3596d7b3e81 <- ~+1161 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:16]
[  patching ic at 0x3596d884d85, test=0x3596d884d89, delta=49
[StoreIC in ~+1196 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:16 (0->.) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[StoreIC in ~+1196 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:16 (.->1) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[StoreIC in ~+1405 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:20 (0->.) map=0x6b2c1b89aa9 0x2a44a0508599 <String[1]: c>]
[StoreIC in ~+1458 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:21 (0->.) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[CompareIC in ~+1750 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:21 ((UNINITIALIZED+UNINITIALIZED=UNINITIALIZED)->(SMI+SMI=SMI))#LT @ 0x3596d7a1fa1]
[  patching ic at 0x3596d884fd2, test=0x3596d884fd6, delta=21
[CallIC in ~+1531 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:22 (0->1) map=0x0 0xe15f4ca8981 <String[4]: load>]
[LoadIC in ~load+64 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:2 (P->P) map=0x6b2c1b89b01 0x2a44a0509ad1 <String[1]: x>]
[BinaryOpIC(ADD:None*None->None) => (ADD:Smi*Smi->Smi) @ 0x3596d7b3e81 <- ~+1609 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:21]
[  patching ic at 0x3596d884f45, test=0x3596d884f49, delta=49
[StoreIC in ~+1644 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:21 (0->.) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
[StoreIC in ~+1644 at ../presentations/PerformanceProfiling/resources/code/load-polymorphic.js:21 (.->1) map=0x6b2c1b89631 0x2a44a0508d91 <String[1]: i>]
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
