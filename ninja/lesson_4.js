var button = document.getElementById('button');

button.addEventListener('click', function(event) {
   console.log(event);
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
});

button.addEventListener('mouseover', function(event) {
    alert('1');
});

window.addEventListener('scroll', function(event) {
    console.log(event);
});

console.log(window.location);
//history.back()

// tabs 3

console.log(getComputedStyle(button));
button.style.color = 'red';
button.classList.add('class4');

var span = document.getElementById('clickMe');
var i = 1;
span.onclick = function() {
    //document.getElementById('span3').style.color = 'red';
    document.querySelector('[data-element="' + i + '"]').style.color = 'black';
    i++;
    document.querySelector('[data-element="' + i + '"]').style.color = 'red';
    // po krugu
};
//document.querySelectorAll('[data-element]').length


