const flowers = [
  {
    name: "Rose (Rosoideae)",
    price: "1.5$",
    availability: "In stock",
    image: "./files/img/rose.png",
  },
  {
    name: "Lily (Lilium)",
    price: "0.9$",
    availability: "In stock",
    image: "./files/img/lily.png",
  },
  {
    name: "Lotus (Nelumbo nucifera)",
    price: "2$",
    availability: "In stock",
    image: "./files/img/lotus.png",
  },
  {
    name: "Tulip (Tulipa)",
    price: "0.7$",
    availability: "Out of stock",
    image: "./files/img/tulip.png",
  },
  {
    name: "Orchid (Orchidaceae)",
    price: "1.3$",
    availability: "In stock",
    image: "./files/img/orchid.png",
  },
];

let flower_buttons, main_svg, main_image, main_price, main_availability, main_name;

addEventListener("DOMContentLoaded", (event) => {
  flower_buttons = document.querySelectorAll(".buttons-container .text");
  main_svg = document.getElementById("main-svg");
  main_image = document.getElementById("main-image");
  main_price = document.getElementById("main-price");
  main_availability = document.getElementById("main-availability");
  main_name = document.getElementById("main-name");
});

function change_flower(el, c) {
  c--;

  flower_buttons.forEach((el) => {
    el.classList.remove("active");
  });
  el.querySelector(".text").classList.add("active");

  main_image.style.display = "inline";
  main_svg.style.display = "none";

  main_image.src = flowers[c].image;
  main_price.innerHTML = "Price: " + flowers[c].price + "/buc";
  main_availability.innerHTML = "Availability: " + flowers[c].availability;
  main_name.innerHTML = flowers[c].name;
}