var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("buton-navigare").style.bottom = "-50px";
  } else {
    document.getElementById("buton-navigare").style.bottom = "15px";
  }
  prevScrollpos = currentScrollPos;
}