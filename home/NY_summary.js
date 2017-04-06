// 1) в функцию передается массив и 2 индекса,
// нужно поменять элементы под этими индексами, например
// task1([6, 7, 8, 9, 10], 1, 3) -> [6, 9, 8, 7, 10]

var a = [6, 7, 8, 9, 10];

var task1 = function(masiv, index1, index2) {
    var b = masiv[index1];
    masiv[index1] = masiv[index2];
    masiv[index2] = b;
    return masiv;
};

var c = 1;

console.log(task1(a, c, 3));
console.log(a);



// 2) перевернуть квадратную матрицу относительно главной диагонали
// 1 2 3    1 4 7
// 4 5 6 -> 2 5 8
// 7 8 9    3 6 9

c = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
];

var task2 = function(matrix) {
    for(var i = 0; i< matrix.length/2; i++){
        for(var j = 0; j< matrix.length; j++){
            console.log('i,j', i, j);
            var firstReverse = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = firstReverse;
        }
    }
    return matrix;
};

console.log(c);
console.log(task2(c));



// 3) проверить является ли строка палиндромом
// 404 -> true
// топот -> true
// test -> false

var task3 = function(pulindrom) {
    return pulindrom == pulindrom.split('').reverse().join('');
};

console.log(task3('404'));
console.log(task3('непалиндром'));
console.log(task3('лохол'));



// 4) преобразовать строку вида 'a=1;b=3;c=3'
// в объект вида { a : 1, b : 2, c : 3 }
//(поможет функция https://javascript.ru/String/split)

var task4 = function(stroka) {
    var result = stroka.split(';');
    var object = {};
    for(var i = 0;  i < result.length; i++){
        var massive = result[i].split('=');
        object[massive[0]] = massive[1];
    }
    return object;
};

console.log(task4('a=1;b=3;c=3'));
