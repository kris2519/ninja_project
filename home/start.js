//создай обьект сначала с одним ключем, в котором будет результат анонимной функции - умножение 2-х чисел

var s = function(x, y) {
    a = x * y;
    return a;
};

var homeWork = {
    firstKey : s(5, 5),
    secondKey : searchId()
};

//потом этому же обьекту другому ключу присвой результат именованной функции - поиск элемента по идентификатору

function searchId() {
    var d =  document.getElementById('element-id');
    return d;
}

console.log(homeWork.firstKey);
console.log(homeWork.secondKey);


//создай самовызывающуеся функцию, где будет вешаться клик на кнопку, при клике на кнопку в массив будет записываться единица и
//alertом этот массив показываться

(function (){
    var massive = [1, 2];
    document.getElementsByTagName('button')[0].onclick = function() {
        massive.push(1);
        alert(massive);
    };
}());

//удачи!