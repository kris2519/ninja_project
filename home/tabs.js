//js

//var tab     = document.querySelectorAll('[data-tab]');
//var content = document.querySelectorAll('[data-content]');
//
//for(var i = 0; i < tab.length; i++) {
//    tab[i].onclick = function (e) {
//        for(var j = 0; j < content.length; j++) {
//            content[j].style.display = 'none';
//        };
//        var dataTab = e.target.getAttribute('data-tab');
//        document.querySelector('[data-content =' + dataTab + ']').style.display = 'block';
//    };
//};

//for
$(function(){
    var $tabs = $('button[data-tab]');
    var $contents = $('div[data-content]');
    $tabs.on('click', function(event){
        var $clickedTab = $(event.currentTarget);
        var currentTab  = $clickedTab.data('tab');
        for (var i = 0; i < $contents.length; i++){
            var $currentContent = $contents.eq(i);
            $currentContent.toggle($currentContent.data('content') == currentTab)
        };
    })
});

//each
$(function(){
    var $tabs = $('button[data-tab]');
    var $contents = $('div[data-content]');
    $tabs.on('click', function(event){
        var $clickedTab = $(event.currentTarget);
        var currentTab  = $clickedTab.data('tab');
        $contents.each(function(i, content){
            var $currentContent = $contents.eq(i);
            $currentContent.toggle($currentContent.data('content') == currentTab)
        });

    })
});

//выполнить без цикла

//нажимаем на таб
//отображается его контент
//остальные скрываются