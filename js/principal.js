/*Scroll*/

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("scroll", function() {
      var volver = document.getElementById("volver");
    
      if (window.scrollY > 300) {
        volver.classList.remove("hidden");
      } else {
        volver.classList.add("hidden");
      }
    });
  const volver = document.getElementById("arriba");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      volver.style.display = "block";
    } else {
      volver.style.display = "none";
    }
  });
  volver.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
