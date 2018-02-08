if (window.navigator.userAgent.search("Mobile") != -1) {
  document.body.style = "max-width:480px;";
  mob = document.createElement("p");
  mob.innerHTML = "You are using mobile vision.";
  document.body.appendChild(mob);
}
