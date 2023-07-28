addEventListener("DOMContentLoaded", (event) => {
  overlay_order = document.querySelector(".overlay-order");
  
  order_input = overlay_order.querySelectorAll("input:not([type='button'])");
  order_select = overlay_order.querySelectorAll("select");
  order_button_input = overlay_order.querySelector("input[type='button']");
  
  order_input.forEach((el) => {
    el.addEventListener("input", ioif);
  });
  order_select.forEach((el) => {
    el.addEventListener("input", ioif);
  });



  overlay_contact = document.querySelector(".overlay-contact");
  
  contact_input = overlay_contact.querySelectorAll("input:not([type='button'])");
  contact_textarea = overlay_contact.querySelectorAll("textarea");
  contact_button_input = overlay_contact.querySelector("input[type='button']");
  
  contact_input.forEach((el) => {
    el.addEventListener("input", icif);
  });
  contact_textarea.forEach((el) => {
    el.addEventListener("input", icif);
  });
});

function ioif() {
  let is_order_input_filled = true;

  order_input.forEach((el) => {
    if (el.value == "") is_order_input_filled = false;
  });
  order_select.forEach((el) => {
    if (el.value == "-") is_order_input_filled = false;
  });

  if (is_order_input_filled) order_button_input.disabled = false;
  else order_button_input.disabled = true;
}

function icif() {
  let is_contact_input_filled = true;

  contact_input.forEach((el) => {
    if (el.value == "") is_contact_input_filled = false;
  });
  contact_textarea.forEach((el) => {
    if (el.value == "") is_contact_input_filled = false;
  });

  if (is_contact_input_filled) contact_button_input.disabled = false;
  else contact_button_input.disabled = true;
}