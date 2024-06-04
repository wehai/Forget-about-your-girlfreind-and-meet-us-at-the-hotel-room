
var fsize = 16;
window.onscroll = function() {shrink()}
function shrink(){
  fsize = fsize + 0.01;
  document.getElementById("text").style["fontSize"] = fsize+"px" ;
}