document.getElementById('pict1').onmouseover= newimg1; //racord des id photos
document.getElementById('pict1').onmouseout= newimg2;

function newimg1()
{
    document.getElementById('pict1').src = 'assets/img/w_i.jpeg';  //photo 1
}
function newimg2()
{
    document.getElementById('pict1').src = 'assets/img/2575063-poutine44.jpg'; // photo 2
    document.getElementById('pict1').alt = 'Image de Poutine sur un aigle';
    
}