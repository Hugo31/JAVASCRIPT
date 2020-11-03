document.getElementById('clickButton').onclick = showAlert; // apl de la fonction showalert au clic de clickbutton
function showAlert(){ // declaration de la fonction showalert
     var lastname = document.getElementById('lastname').value; // récupération du nom
     var firstname = document.getElementById('firstname').value; //récupération du prénom
     var city = document.getElementById('city').value;//récupération de la ville
     alert('nom : ' + lastname + '\nprenom : '+ firstname+ '\nville:'+ city);  // affichage de la boite de dialogue
 }
 

