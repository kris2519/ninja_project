//умножение двух матриц
//a = [[1,2,3], [4,5,6], [7,8,9]]

//элементы матрицы А:

//1 ряд:
x1 = [1, 2, 3];

//2 ряд:
x2 = [2, 5, 4];

//3 ряд:
x3 = [3, 4, 5];

//элементы матрицы B:

//1 ряд:
y1 = [3, 2, 1];

//2 ряд:
y2 = [4, 3, 2];

//3 ряд:
y3 = [5, 4, 3];

//элементы матрицы C:

//1 ряд:
z1 = [];

//2 ряд:
z2 = [];

//3 ряд:
z3 = [];

//матрица A
A = [ x1, x2, x3 ];

//матрица B
B = [ y1, y2, y3 ];

//Тут я думаю, что могу и сама справиться с этим заданием и начинаю расписывать умножение матрицы 3х3
i=0;

z2[i]            = [ x1[i]*y1[i]                     + x1[i+1]*y2[i]                       + x1[i+2]*y3[i]                       ];
z2[i+1]          = [ x1[i]*y1[i+1]                   + x1[i+1]*y2[i+1]                     + x1[i+2]*y3[i+1]                     ];
z2[i+2]          = [ x1[i]*y1[i+2]                   + x1[i+1]*y2[i+2]                     + x1[i+2]*y3[i+2]                     ];

C[row][column]   = [ A[row][column]*B[row][column]   + A[row][column+1]*B[row+1][column]   + A[row][column+2]*B[row+2][column]   ];
C[row][column+1] = [ A[row][column]*B[row][column+1] + A[row][column+1]*B[row+1][column+1] + A[row][column+2]*B[row+2][column+1] ];
C[row][column+2] = [ A[row][column]*B[row][column+2] + A[row][column+1]*B[row+1][column+2] + A[row][column+2]*B[row+2][column+2] ];

//матрица С

C = [];

console.log(z1[0]);
console.log(z2[0]);