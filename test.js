//let hui = 'Эта тестовая страница была создана для проверки различного кода.';
//alert(hui);

function setBgg() {
    alert('hui');
}

//-----------------------------------------------------------------------{спизжено}"начало"
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//------------------------------------------------------------------------"конец"
$(function() {
    $('#toggle-event').change(function() {
      $('#test1').body('Toggle: ' + $(this).prop('checked')).className='en'
    });
  });