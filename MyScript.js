username = document.querySelector('#username');
password = document.querySelector('#password');
confirm = document.querySelector('#confirm');
btn = document.querySelector('#btn');
btn.setAttribute('disabled', true);
username.oninput = function() {
  if (username.value.length > 0) {
    password.oninput = function() {
      if (password.value.length > 0) {
        confirm.oninput = function() {
          if (confirm.value.length > 0) {
            btn.removeAttribute('disabled');
          }
          else btn.setAttribute('disabled', true);
        }
      }
    }
  }
}
function register() {
  password1 = document.getElementById("password").value;
  password2 = document.getElementById("confirm").value;
      if( password2 != password1)
    {
     alert ('Password not Matched');
    }
    else
    {
        alert('You have successfully registered');
    }
  }
username.setAttribute('required', true);
password.setAttribute('required', true);
confirm.setAttribute('required', true);

$("btn").on("click", function(){
  $("h1").hide();
});
var imageUrl = "photo5222239242330159267.jpg";
$(".box").css('background-image', 'url(' +imageUrl  + ')');

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$( "p" ).click(function() {
  $( this ).fadeTo( "slow", 0.40 );
});
$( "#btn1" ).click(function() {
  $( "#box" ).animate({
   width: "300px",
   height: "300px",
    }, 1500 );
});

$( "#btn2" ).click(function() {
  $( "#box" ).animate({
   width: "100px",
   height: "100px",
    }, 1500 );
});
var maxLength = 20;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});
