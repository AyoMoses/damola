window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('fixedMenu').className = 'myFixedMenu-box-shadow';
  } else {
    document.getElementById('fixedMenu').className = 'header';
  }
}


// CHECKBOX MENU CLOSE AFTER LINK CLICK
var checkbox = document.querySelector( '#menu-btn' );
var icon = document.querySelector( '#menuicon' );

var listener = function( e ) {
  if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
  }
};

checkbox.addEventListener( 'click', function(){
  if( this.checked ) {
    document.addEventListener( 'click', listener );
  } 
});
