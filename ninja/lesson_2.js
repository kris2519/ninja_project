//условный оператор

if (4 > 5) {
    console.log('4 > 5');
} else if (4 < 5) {
    console.log('4 < 5');
} else {
    console.log('4 == 5');
}

//формы записи условий

//<
//>
//==
//!=
//<=
//>=

//false, 0, '', undefined, null

if ('567567567') {
    console.log(1);
} else {
    console.log(2);
}

//условный оператор

var a = 2;
switch (a) {
    case 1 :
        console.log('a == 1');
        break;
    case 2 :
    case 4 :
        console.log('a == 2 or a == 4');
        break;
    case 3 :
        console.log('a == 3');
        break;
    case 5 :
    default :
        console.log('a > 3');
}

//цикл while

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

var j = 5;
while (j) {
    console.log(j);
    j--;
}

//цикл for

for (var index = 0, length = 10; index < length; index++) {
    console.log(index);
}

//запись одного и того же цикла через while и for

var mas = [5,6,7,4];
i = 0;
while (i < mas.length) {
    console.log(i, mas[i], mas.length);
    i++;
}

for (i = 0; i < mas.length; i++) {
    console.log(i, mas[i], mas.length);
}

// и или не

// and - &, &&     *
// or - |, ||      +
// not - !
var a = 3 < 1; // false
if (!(65 == 5 || 3 > 2 && !a)) {
    // !a -> true
    // 3 > 2 -> true
    // 3 > 2 && !a -> true
    // 65 == 5 -> false
    // !true -> false
}

var d = 0;
if (d != 0 && 5 / d > 7) {
    console.log();
}

a = 5;
b = a++;
console.log(b, a);
a = 5;
b = ++a;
console.log(b, a);

//короткая запись выражения с переменной в переменной

a = a + 4;
a += 4;
a *= 3;


// % - mod ДЕЛЕНИЕ ПО МОДУЛЮ

//метод Math - позволяет работать с математическими функциями

// Math.pow(2, 3) = 8
// log - ln
// log10 - lg
// abs - ||
// ceil - round up
// floor - round down


//  тернарный оператор
 if (5 > 3) {
     a = 2;
 } else {
     a = 1;
 }

a = (5 > 3) ? 2 : 1;

var b = {
    a : 1,
    b : 2,
    c : 3
};

for (var i in [1,2,3,4]) {
    console.log(i);
}

for (var key in b) {
    console.log(key, b[key]);
}

console.log('while');
a = 1;
b = 2;
while (true) {
    a++;
    console.log('a', a);
    if (a % 2 == 0) {
        continue;
    }
    console.log('b', b);
    if (a == 11) {
        break;
    }
}
