const darkMode = document.getElementById("dark");

darkMode.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkMode.src = "assets/sun.png";
  } else {
    darkMode.src = "assets/moon.png";
  }
};
