//Тут Сережа разрушает мою самооценку и помогает написать цикл. в цикле. в цикле! Серьезно!!
var A = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

var B = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];


var C = [[],[],[]];

for(var row = 0; row <= 2; row++){
    for(var column = 0; column <= 2; column++){
        C[row][column] = 0;
        for (var j = 0; j <= 2; j++) {
            C[row][column] += A[row][j] * B[j][column];
        }
        //C[row][column] = A[row][0] * B[0][column] + A[row][1] * B[1][column] + A[row][2] * B[2][column];
    }
}

console.log(C);