let darkModeIcon = document.getElementById("dark");
//let logo = document.querySelector(".logo");
darkModeIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    darkModeIcon.src = "assets/sun.png";
    //logo.style.filter = "invert(1)";
  } else {
    //logo.style.filter = "none";
    darkModeIcon.src = "assets/moon.png";
  }
};
