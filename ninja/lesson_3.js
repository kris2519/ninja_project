var factorial = function(value) {
    if (value == 0) {
        return 1;
    }
    return value * factorial(value - 1);
};

console.log(factorial(4));

//2! = 2 * 1;
//3! = 3 * 2 * 1 = 3 * 2!

var f = function(value) {
    var temp = 1;
    while (value > 1) {
        temp *= value--;
    }
    return temp;
};

console.log(f(4));


var menu = [{
    name : 'wqe'
}, {
    name : 'ewq',
    sub : [{
        name : 'asd',
        sub : [{
            name : 'aesa'
        }]
    }, {
        name : 'qwe'
    }]
}];

//wqe
//ewq
//--asd
//----aesa
//--qwe

var pow = function(number, stephen) {
    if (stephen == 0) {
        return 1;
    }
    return number * pow(number, stephen - 1);
};

console.log(pow(2, 3));

var some = function(number, string, obj, arr) {
    number += 4;
    string += 'qwe';
    obj.b = 3;
    arr.push(5);
};

var number = 2; //po znach
var string = '213'; //po znach
var obj = { // po silke
    a : 2
};
var arr = [1,2,3]; //po silke

console.log(number);
console.log(string);
console.log(obj);
console.log(arr);
some(number, string, obj, arr);
console.log(number);
console.log(string);
console.log(obj);
console.log(arr);

