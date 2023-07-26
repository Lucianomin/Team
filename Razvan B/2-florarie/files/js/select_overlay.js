let overlay, overlay_prices, overlay_order, overlay_contact;

addEventListener("DOMContentLoaded", (event) => {
  overlay = document.querySelector(".overlay");
  overlay_prices = document.querySelector(".overlay-prices");
  overlay_order = document.querySelector(".overlay-order");
  overlay_contact = document.querySelector(".overlay-contact");
});

function change_overlay(c) {
  overlay.style.display = "flex";
  overlay_prices.style.display = "none";
  overlay_order.style.display = "none";
  overlay_contact.style.display = "none";

  if(c==1) {
    console.log(overlay_prices);
    overlay_prices.style.display = "flex";
  }
  if(c==2) {
    overlay_order.style.display = "flex";
  }
  if(c==3) {
    overlay_contact.style.display = "flex";
  }
}

function close_overlay() {
  overlay.style.display = "none";
  overlay_prices.style.display = "none";
  overlay_order.style.display = "none";
  overlay_contact.style.display = "none";
}

