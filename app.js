$('#squareToggle').click(function(){
    $(this).find('img').toggle();
});

function colorchange(id) {
    
        var background = document.getElementById(button).style.backgroundColor;
        if (background == "rgb(124, 119, 112)") {
            document.getElementById(button).style.background = "rgb(58, 63, 58)";
        } else {
            document.getElementById(button).style.background = "rgb(124, 119, 112)";
        }
    
    }
    jQuery(function ($) {
        $('#button').click(function () {
            $(this).toggleClass('highlight')
        })
    })