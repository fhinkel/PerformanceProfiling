

function load(obj) {
    return obj.x;
}

load({x:5});
load({x:17});
load({x:3, a: 1});
load({x:7, b: 1});
load({x:42, c: 1});
%OptimizeFunctionOnNextCall(load);
load({x:13});


