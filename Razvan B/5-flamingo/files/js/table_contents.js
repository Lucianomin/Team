let data = [
  "",
  {
    crt: 1,
    tema: "Maimuta",
    img: "./files/img/maimuta.png",
    link: "",
    link_text: "Indisponibil",
  },
  {
    crt: 2,
    tema: "Zebra",
    img: "./files/img/zebra.png",
    link: "../2-zebra/index.html",
    link_text: "Vezi site ->",
  },
  {
    crt: 3,
    tema: "Elefant",
    img: "./files/img/elefant.png",
    link: "",
    link_text: "Indisponibil",
  },
  {
    crt: 4,
    tema: "Florarie",
    img: "./files/img/florarie.png",
    link: "../4-florarie/index.html",
    link_text: "Vezi site ->",
  },
  {
    crt: 5,
    tema: "Flamingo",
    img: "./files/img/flamingo.png",
    link: "",
    link_text: "Acest site",
  },
  {},
  {},
];
data[6]=data[1];
data[7]=data[2];
let el, interval, i = 1;

addEventListener("DOMContentLoaded", (event) => {
  el = [
    "",
    [
      "",
      document.getElementById("t11"),
      document.getElementById("t12"),
      document.getElementById("t13"),
      document.getElementById("t14"),
    ],
    [
      "",
      document.getElementById("t21"),
      document.getElementById("t22"),
      document.getElementById("t23"),
      document.getElementById("t24"),
    ],
    [
      "",
      document.getElementById("t31"),
      document.getElementById("t32"),
      document.getElementById("t33"),
      document.getElementById("t34"),
    ],
  ];

  change_table();
  interval = setInterval(change_table, 3000);
});

function change_table() {
  for (let j = 1; j <= 3; j++) {
    el[j][1].innerHTML = data[i+j-1].crt;
    el[j][2].innerHTML = data[i+j-1].tema;
    el[j][3].src = data[i+j-1].img;
    el[j][4].href = data[i+j-1].link;
    el[j][4].innerHTML = data[i+j-1].link_text;
  }

  if (i == 5) i = 1;
  else i++;
}