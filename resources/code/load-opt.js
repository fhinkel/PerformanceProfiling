

function load(obj) {
    return obj.x;
}

load({x:5});
load({x:17});
load({x:17, a: 1});
load({x:17, b: 1});
%OptimizeFunctionOnNextCall(load);
load({x:17, c: 1});
load({x:42});
