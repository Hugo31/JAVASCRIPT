document.getElementById('clickButton').onclick = showAlert; // apl de la fonction showalert au clic de clickbutton
function showAlert(){ // declaration de la fonction showalert

     var age = document.getElementById('age').value; // récupération de l'age

    let result;
    if (age>18) {
        result = ' Vous etes majeurs';
    }
    else{
        result= ' Vous etes mineurs';
    }
   

     alert('Bravo ' + result) ; // affichage de la boite de dialogue
 }
 