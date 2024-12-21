const login = document.getElementById("loginBtn");
const loginCard = document.querySelector(".login");
const cross = document.getElementById("close");

login.addEventListener("click", function() {
  loginCard.style.visibility = "visible";
})

cross.addEventListener("click", function() {
  loginCard.style.visibility = "hidden";
})