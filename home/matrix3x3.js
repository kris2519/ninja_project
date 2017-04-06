//заполнить массив 3x3 нулями:

x1 = [0, 0, 0];
x2 = [1, 1, 1];
x3 = [2, 2, 2];

Zero=[x1, x2, x3];

for (var c = 0; c <=2; c++){
    for (var row = 0; row <= 2; row++){
        console.log(Zero[row][c])
    }
}