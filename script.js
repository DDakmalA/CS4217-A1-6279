var acc = document.getElementsByClassName("drawer");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var infobox = this.nextElementSibling;
    if (infobox.style.display === "block") {
      infobox.style.display = "none";
    } else {
      infobox.style.display = "block";
    }
  });
}
//drawer for visa, laws & regulations, + general tips


//image carousel
let placeIndex =1;
showPlaces(placeIndex);

function addPlaces(n) {
  showPlaces(placeIndex += n);
}

function thisPlace(n) {
  showPlaces(placeIndex = n);
}

function showPlaces(n) {
  let i;
  let places = document.getElementsByClassName("placecard");
  if (n > places.length) {
    placeIndex = 1
  } 
  if (n < 1) {placeIndex = places.length}
  for (i = 0; i < places.length; i++) {
    places[i].style.display = "none";
  }

  places[placeIndex-1].style.display = "block";
  dots[placeIndex-1].className += " active";
}

function formValidation() {
  let x = document.forms["newsletter"]["Name"].value;
  if (x == "") {
    alert("Please enter your name");
    return false;
  }
  let y = document.forms["newsletter"]["Email"].value;
  if (y == ""){
    alert("Please enter your Email");
    return false;
  }
}