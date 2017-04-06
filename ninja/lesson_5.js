//json - javascript object notation

var data = {
    a : 2,
    b : 3
};
var json = JSON.stringify(data);

console.log(json);
console.log(JSON.parse(json));

// https://learn.javascript.ru/ajax-xmlhttprequest
// get/post
// xml

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://aldim.az/api/banners?shown=true', false);
xhr.send();
if (xhr.status != 200) {
    // обработать ошибку
    console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
    // вывести результат
    var banners = JSON.parse(xhr.responseText); // responseText -- текст ответа.
    // div 200px
    console.log(banners[0].name);
}

var ajax = function(type, url, onSuccess) {

};

//test = document.getElementById('test')
//<div id=​"test">​</div>​
//test.innerHTML
//""
//test.innerHTML = '<b>Hello</b> World!'
//"<b>Hello</b> World!"
//test.innerHTML
//"<b>Hello</b> World!"
//test.innerHTML += ' <b>bye</b>'
//"<b>Hello</b> World! <b>bye</b>"

//document.querySelector('body').offsetHeight
//window.pageYoffset + window.innerHeight


//высчитать высоту окна, после полного скролла отправить запрос и догрузить имена баннеров в див.

// 1.создадим ивент.
// 2.повесить ивент на скролл.
// 3.передать в ивент высоту окна.
// 4.отправить запрос после того, как значение скролла = высоте окна.
// 5.создаем дивку.
// 6.запихиваем туда инена баннера.

var ajaxTask = function(e){
    if(document.querySelector('html').offsetHeight == window.pageYOffset + window.innerHeight){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://aldim.az/api/banners?shown=true', false);
        xhr.send();
        if (xhr.status != 200) {
            // обработать ошибку
            console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            var banners = JSON.parse(xhr.responseText); // responseText -- текст ответа.
            // div 200px
            for (var i=0; i<banners.length; i++){
                var bannerDiv = document.createElement('div');
                bannerDiv.style.height='1000px';
                bannerDiv.innerText = banners[i].name;
                document.querySelector('body').appendChild(bannerDiv)
            }
        }
    }
};

window.onscroll = ajaxTask;

