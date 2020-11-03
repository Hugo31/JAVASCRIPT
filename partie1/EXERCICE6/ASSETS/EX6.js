document.getElementById('clickButton').onclick = showAlert; // apl de la fonction showalert au clic de clickbutton
function showAlert() { // declaration de la fonction showalert
    var feetSize = document.getElementById('feetSize').value; // récupération de la valeur
    var birthDate = document.getElementById('birthDate').value; //récupération de la date de n

    var result = (((((feetSize * 2) + 5) * 50) - birthDate) + 1769);

    alert('RESULTAT MERDIQUE ' + result); // affichage de la boite de dialogue
}
