$(document).ready(function(){     
    
    $("#green").mouseover(function(){
        $("#text").css('color', 'green');
    });
        
    $("#red").mouseover(function(){
        $("#text").css('color', 'red');
    });
    $("#blue").mouseover(function(){
        $("#text").css('color', 'blue');
    });
    $("#blue").mouseout(function(){
        $("#text").css('color', 'black');
    });
    $("#red").mouseout(function(){
        $("#text").css('color', 'black');
    });
    $("#green").mouseout(function(){
        $("#text").css('color', 'black');
    });


});