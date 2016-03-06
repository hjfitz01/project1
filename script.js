$(document).ready(function(){
    $(".topic-button").click(function (){
        $(this).parent().find('.subtopics').toggleClass("closed");
    });
});
