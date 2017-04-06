// Циклы
// вывести массив с 10 элементами
// вывести каждый третий элемент (через while и for)

var cycle_massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(cycle_massive);

for(var i=2; i < cycle_massive.length; i+=3){
    console.log(cycle_massive[i]);
}

i = 2;
while(i < cycle_massive.length) {
    console.log(cycle_massive[i]);
    i += 3;
}