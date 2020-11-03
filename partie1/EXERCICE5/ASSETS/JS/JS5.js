document.getElementById('clickbutton').onclick =showAlert;
function showAlert(){

    var dividende = document.getElementById('dividende').value;
    var diviseur = document.getElementById('diviseur').value;
    var resultat = (dividende%diviseur)

    alert('Reste de la division : ' + resultat);
}