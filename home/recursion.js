// some1(10) -> 10, 9, 8, ...0


//это писала я (это таксе)
var firstTask = function(someTen){
    var Ten;
    while (someTen > 0){
        Ten = someTen--;
        console.log(Ten);
    }
};

firstTask(10);

//это Сережка написал рекурсию
var task1 = function(number) {
    console.log(number);
    if (number == 0) {
        return;
    }
    task1(number - 1);
};

task1(10);

// some2([1,2,3]) -> [1,2,3], [1,2], [1], []

var task2 = function(some2) {
    console.log(some2);
    if (some2.length == 0){
        return;
    }
    task2(some2.splice(0, some2.length - 1));
};

task2([1,2,3,4,5]);

//splice(nachalo, kolichestvo elementov)
//[1,2,3,4,5].splice(1,2) == [2,3]

var menu = [{
    name : 'wqe 1'
}, {
    name : 'ewq 1',
    sub : [{
        name : 'asd 2',
        sub : [{
            name : 'aesa 3'
        }]
    }, {
        name : 'qwe 2'
    }]
}];

//wqe 1
//ewq 1
//--asd 2
//----aesa 3
//--qwe 2

var menufunc = function(m, level) {
    for (var i = 0; i < m.length; i++) {
        var menuItem = m[i];
        var chert = '';
        for (var j = 0; j < level; j++) {
            chert += '--';
        }

        console.log(chert + menuItem.name);

        if (menuItem.sub) {
            menufunc(menuItem.sub, level + 1);
        }
    }
};

menufunc(menu, 0);