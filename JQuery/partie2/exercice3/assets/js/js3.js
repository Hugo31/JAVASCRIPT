  $(document).ready(function(){     
        //Dès qu'on clique sur #hide, on applique hide() au texte
        $("#hide").click(function(){
            $("#texte").hide();
        });
        
        //Dès qu'on clique sur #show, on applique show() au texte
        $("#show").click(function(){
            $("#texte").show();
        });
    });

