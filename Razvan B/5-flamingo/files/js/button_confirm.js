let all_input, all_select;

addEventListener("DOMContentLoaded", (event) => {
  all_input = document.querySelectorAll("input:not([type='button'])");
  all_select = document.querySelectorAll("select");
});

function button_confirm(el) {
  let is_all_input_filled = true;

  all_input.forEach((el) => {
    if (el.value == "") is_all_input_filled = false;
  });
  all_select.forEach((el) => {
    if (el.value == "-") is_all_input_filled = false;
  });

  if (is_all_input_filled) {
    el.value = "Salvat cu succes!";
    all_input.forEach((el) => {
      el.value = "";
    });
    all_select.forEach((el) => {
      el.value = "-";
      el.style.color = "var(--placeholder)";
    });
  }
  else el.value = "Date incomplete!";

  setTimeout(() => {
    el.value = "Salveaza"
  }, 3000);
}