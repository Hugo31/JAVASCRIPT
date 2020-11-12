

$(document).ready(function(){

var prix = 0;
var paris = null;
var counter = 0 ;

        prix = Math.floor(Math.random()*100);
    

    $('#button').click(function(event){

        paris = $('#nombre').val();
        counter = counter + 1;
        
     if(paris == prix){ 
        $('.reponse').html('Gagné !!!')
        alert ('Bien joué chakal tu l\'as fais en'+ ' ' + counter +' '+ 'clics !');}

     else if(paris< prix){
          $('.reponse').html('Plus grand !')}
         
     else{
         $('.reponse').html('Plus petit !')}
    
     paris = $('#nombre').val('');
    
         event.preventDefaut();

    });
});
