// сделать вывод года по китайскому гороскопу в зависимости от года

for(var x = 0; x < 4; x++) {
    switch (x % 12) {
        case 11 :
            console.log('goat');
            break;
        case 10 :
            console.log('horse');
            break;
        case 9 :
            console.log('snake');
            break;
        case 8 :
            console.log('dragon');
            break;
        case 7 :
            console.log('rabbit');
            break;
        case 6 :
            console.log('tiger');
            break;
        case 5 :
            console.log('ox');
            break;
        case 4 :
            console.log('rat');
            break;
        case 3 :
            console.log('boar');
            break;
        case 2 :
            console.log('dog');
            break;
        case 1 :
            console.log('rooster');
            break;
        case 0 :
            console.log('monkey');
            break;
    }
}