$('button').click(function() {
    console.log('click');
});

$('button').on('click', function() {
    console.log('on / off');
});

$('button').bind('click', function() {
    console.log('bind / unbind');
});

$.ajax({
    dataType : 'json',
    type : 'get',
    url : 'http://aldim.az/api/banners?shown=true',
    success : function() {
        console.log(arguments);
    }
});

console.log('without dom ready', $('[data-content]').length);

$(function() {
    console.log('with dom ready', $('[data-content]').length);
});

//теория
// объект = хеш (имеет ключ и его значение)
// переменная - значение, которое можно менять
// константа - значение, которое нельзя менять (const)
// строка - массив символов (можно обратиться к одному из них, кстатиии)
// массив, коллекция(массив объектов)
// рендерить - сгенеировать и отобразить
// комиплировать - создавать из всего кода исполняемый файл.

//для того, чтобы замерджить одну ветку в другую - нужно перейти в другую и из нее в нее замерджить первую!!!!!!!!!!!