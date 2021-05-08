window.onload = function () {
  try {  
    if (window.navigator.userAgent.search("Mobile") != -1) {
      document.getElementsByTagName("body")[0].style = "max-width:480px;";
      mob = document.createElement("p");
      mob.innerHTML = "You are using mobile vision.";
      document.body.appendChild(mob);
    }
  }
  catch (err) {
  alert(err.stack);
  }
}
