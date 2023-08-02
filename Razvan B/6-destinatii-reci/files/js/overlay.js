let ol;

addEventListener("DOMContentLoaded", (event) => {
  ol = [
    document.querySelector(".overlay"),
    document.getElementById("o1"),
    document.getElementById("o2"),
    document.getElementById("o3"),
    document.getElementById("o4"),
    document.getElementById("o5"),
    document.getElementById("o6"),
    document.getElementById("o7"),
    document.getElementById("o8"),
  ];
});

function overlay(j) {
  ol[0].style.display = "flex";
  ol[1].innerHTML = data[j].oras;
  ol[2].innerHTML = "Temperatura medie: " + data[j].temp + "°C";
  ol[3].firstElementChild.href = data[j].locatie;
  ol[4].src = data[j].img;
  ol[5].innerHTML = data[j].desc;
  ol[6].innerHTML =
    "<li>" + data[j].atractii[0] + "</li>" +
    "<li>" + data[j].atractii[1] + "</li>" + 
    "<li>" + data[j].atractii[2] + "</li>";
  ol[7].href = data[j].booking;
  ol[8].href = data[j].get_your_guide;
}

function close_overlay() {
  ol[0].style.display = "none";
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}