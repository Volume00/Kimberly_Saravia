function apriLettera() {
    var lettera = document.getElementById("lettera");
    var contenuto = document.getElementById("contenuto");
  
    lettera.style.transform = "rotateY(-180deg)";
    lettera.style.transition = "transform 0.5s";
  
    setTimeout(function() {
      lettera.style.display = "none";
      contenuto.style.display = "block";
    }, 500);
}