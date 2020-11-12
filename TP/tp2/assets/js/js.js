$(document).ready(function () {

    $('#button').click(function () {



        var Maths = $('#Maths').val();
        var Francais = $('#Francais').val();
        var Anglais = $('#Anglais').val();
        var Histoire = $('#Histoire').val();
        var Espagnol = $('#Espagnol').val();

        var moyenne = $('#moyenne').val() = (parseFloat(Maths) + parseFloat(Francais) + parseFloat(Anglais) + parseFloat(Histoire) + parseFloat(Espagnol)) / 5;

        if (moyenne < 10) {
            alert("moyenne est de :" + moyenne + " - en dessous de la moyenne");
        } else if (moyenne >= 10 && moyenne < 13) {
            alert("moyenne est de :" + moyenne + " - moyen");
        } else if (moyenne >= 13 && moyenne < 16) {
            alert("moyenne est de :" + moyenne + " - bien");
        } else if (moyenne >= 16 && moyenne < 20) {
            alert("moyenne est de :" + moyenne + " - tres bien");
        } else {
            alert("moyenne est de :" + moyenne + " - excellent");
        }


    });
});