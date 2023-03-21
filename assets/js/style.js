const btn = document.getElementById("submit");
const btns = document.querySelectorAll(".rate");

function verNome(nomeBotao) {
  document.getElementById("numberShow").innerHTML = "You selected " + nomeBotao + " out of 5";
}

function tradeScreen(click) {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "flex";
};