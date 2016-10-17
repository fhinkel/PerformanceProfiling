

function load(obj) {
    return obj.x;
}

load({x: 5});
load({x: 17});
%OptimizeFunctionOnNextCall(load);
load({x: 13});

load({x: 13, a: 17});




