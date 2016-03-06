$(document).ready(function(){
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
