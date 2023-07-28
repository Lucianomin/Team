function grow_select_shadow(el) {
  el.style.textShadow = "0 0 0.2vw var(--accent)";
}

let count_and_color, c_white, c_pink, c_red, c_purple, c_yellow, c_orange;

addEventListener("DOMContentLoaded", (event) => {
  count_and_color = document.getElementById("count-and-color");
  c_white = document.getElementById("c-white");
  c_pink = document.getElementById("c-pink");
  c_red = document.getElementById("c-red");
  c_purple = document.getElementById("c-purple");
  c_yellow = document.getElementById("c-yellow");
  c_orange = document.getElementById("c-orange");
});

function select_flower_type(el) {
  let value = el.value;

  Array.from(count_and_color.children).forEach((el) => {
    el.disabled = false;
  });

  c_white.hidden = true;
  c_pink.hidden = true;
  c_red.hidden = true;
  c_purple.hidden = true;
  c_yellow.hidden = true;
  c_orange.hidden = true;

  if(value=="rose") {
    c_white.hidden = false;
    c_pink.hidden = false;
    c_red.hidden = false;
  }
  if(value=="lily") {
    c_white.hidden = false;
    c_pink.hidden = false;
    c_orange.hidden = false;
  }
  if(value=="lotus") {
    c_white.hidden = false;
    c_pink.hidden = false;
  }
  if(value=="tulip") {
    c_white.hidden = false;
    c_pink.hidden = false;
    c_red.hidden = false;
    c_yellow.hidden = false;
  }
  if(value=="orchid") {
    c_white.hidden = false;
    c_purple.hidden = false;
  }  
}