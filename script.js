// button movement js
$(function(){
    $(".topic-button").click(function (){
        var  $element = $(this).parent().find('.subtopics');
        if(!$element.hasClass('closed')){
            $element.addClass("closed");
            return;
        };
        $(".subtopics").addClass("closed");
        $element.removeClass("closed");
    });
});

//contact js
$(document).ready(function () {
    $("input#submit").click(function(){
        $.ajax({
            type: "POST",
            url: "process.php", //process to mail
            data: $('form.contact').serialize(),
            success: function(msg){
                $("#thanks").html(msg) //hide button and show thank you
                $("#form-content").modal('hide'); //hide popup  
            },
            error: function(){
                alert("failure");
            }
        });
    });
});


//nav bar

// created thanks to https://github.com/benwiley4000/dsn-zine-resistance/blob/master/src/js/main.js#L407f 

var navButton = document.querySelector('.nav-btn');
var navContainer = document.querySelector('.nav-container');

navButton.addEventListener('click', function () {
    if (navContainer.classList.contains('open')) {
        navContainer.classList.remove('open');
    } else {
       navContainer.classList.add('open');;
    }
}, false);

navContainer.addEventListener('click',function(event){
    event.stopPropagation();
});

document.body.addEventListener('click', function () {
    navContainer.classList.remove('open');
}, false);