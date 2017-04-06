//переменная, которая по клику на элемент с идентификатором записывает в консоль сообщение

button = document.getElementById('button');
button.onclick = function() {
    console.log('File');
};

//переменная, которая выполняет функцию

b = function() {
    var a = 1;
};

//массив, вызов элементов массива в консоли, переопределение элементов массива, добавление

var a = [1,2,3,4];
console.log(a[0]);
console.log(a[4]);
console.log(a);
a[2] = 33;
console.log(a);
a[10] = 121;
console.log(a);
a.push(4);

//объект с ключем, переопределение ключа, добавление ключа

var b = {
    name : 2
};

console.log('name', b.name);
b.name = 3;
console.log(b.name);
b.lastname = 4;
console.log(b.lastname);
console.log(b.last);

//вызов именованной функции

func();

var c = function() {
    var x = 20;
    alert(x);

};

c();

function func() {
    var x = 30;
    alert(x);
}

//самовызывающаяся функция

(function() {
    alert('qwe');
}());

//переменная, в которой содержится функция вызова переменной button

var getButton = function() {
    var button;
    return function() {
        if (button == undefined) {
            button = document.getElementById('button')
        }
        return button;
    };
};

getButton();
var s;

function summa(a, b) {
    s = a + b;
    return s;
    s = 67;
}

var s1 = summa(2, 2);

console.log(s, s1);