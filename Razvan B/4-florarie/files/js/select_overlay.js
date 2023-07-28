let overlay, overlay_prices, overlay_order, overlay_contact, overlay_order_confirm, overlay_contact_confirm;
let order_input, order_select, order_button_input;

addEventListener("DOMContentLoaded", (event) => {
  overlay = document.querySelector(".overlay");
  overlay_prices = document.querySelector(".overlay-prices");
  overlay_order = document.querySelector(".overlay-order");
  overlay_contact = document.querySelector(".overlay-contact");
  overlay_order_confirm = document.querySelector(".overlay-order-confirm");
  overlay_contact_confirm = document.querySelector(".overlay-contact-confirm");

  order_input = overlay_order.querySelectorAll("input:not([type='button'])");
  order_select = overlay_order.querySelectorAll("select");
  order_button_input = overlay_order.querySelector("input[type='button']");

  contact_input = overlay_contact.querySelectorAll("input:not([type='button'])");
  contact_textarea = overlay_contact.querySelectorAll("textarea");
  contact_button_input = overlay_contact.querySelector("input[type='button']");
});

function change_overlay(c) {
  overlay.style.display = "flex";
  overlay_prices.style.display = "none";
  overlay_order.style.display = "none";
  overlay_contact.style.display = "none";
  overlay_order_confirm.style.display = "none";
  overlay_contact_confirm.style.display = "none";

  if(c==1) {
    overlay_prices.style.display = "flex";
  }
  if(c==2) {
    overlay_order.style.display = "flex";
  }
  if(c==3) {
    overlay_contact.style.display = "flex";
  }
  if(c==4) {
    overlay_order_confirm.style.display = "flex";
  }
  if(c==5) {
    overlay_contact_confirm.style.display = "flex";
  }
}

function close_overlay() {
  overlay.style.display = "none";
  overlay_prices.style.display = "none";
  overlay_order.style.display = "none";
  overlay_contact.style.display = "none";
  overlay_order_confirm.style.display = "none";
  overlay_contact_confirm.style.display = "none";

  order_input.forEach((el) => {
    el.value = "";
  });
  order_select.forEach((el) => {
    el.value = "-";
  });
  order_button_input.disabled = true;

  contact_input.forEach((el) => {
    el.value = "";
  });
  contact_textarea.forEach((el) => {
    el.value = "";
  });
  contact_button_input.disabled = true;

  Array.from(count_and_color.children).forEach((el) => {
    el.disabled = true;
  });
}