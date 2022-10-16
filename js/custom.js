// setTimeout(clickThis, 3000);
//
//
// function clickThis() {
//   document.getElementById("clickMe").click();
// }
//
//
// setTimeout()
function clickThis() {
  document.getElementById("clickMe").click();
}

function callMe(){
  clickThis();
  setTimeout(callMe, 3000)
}

callMe();
