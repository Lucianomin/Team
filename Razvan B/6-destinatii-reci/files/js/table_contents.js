let data = [
  "",
  {
    crt: 1,
    oras: "Barrow, Alaska, SUA",
    img: "./files/img/barrow.png",
    temp: -12.4,
    desc: "Barrow, cunoscut local sub numele de Utqiagvik, este cel mai mare oras si resedinta comitatului North Slope Borough din statul american Alaska. Orasul este situat la nord de cercul polar arctic. Este una dintre cele mai nordice localitati din lume si este cel mai nordic oras din Statele Unite ale Americii.",
    atractii: [
      "Muzeul Iñupiat Heritage Center",
      "Tururi ghidate in tundra arctica",
      "Poarta spre Arctic",
    ],
    locatie: "https://www.google.com/maps/place/barrow+alaska/data=!4m2!3m1!1s0x50c2d8011fe06ec5:0xb9d4811209c3d850?sa=X&ved=2ahUKEwjgrMvX4bmAAxXzhP0HHZUyAxkQ8gF6BAgREAA&hl=en&ved=2ahUKEwjgrMvX4bmAAxXzhP0HHZUyAxkQ8gF6BAgVEAE",
    booking: "https://www.booking.com/searchresults.ro.html?ss=BarrowAlaskaSUA",
    get_your_guide: "https://www.getyourguide.com/alaska-l254/",
    selected: false,
  },
  {
    crt: 2,
    oras: "Ilulissat, Groenlanda",
    img: "./files/img/ilulissat.png",
    temp: -4,
    desc: "Ilulissat este un oras de coasta in vestul Groenlandei. Este cunoscut pentru Fiordul Ilulissat si pentru imensele iceberguri din Golful Disko, desprinse de ghetarul Sermeq Kujalleq. Trasee duc catre asezarea Sermermiut pentru privelisti spectaculoase asupra ghetii. Muzeul Ilulissat urmareste istoria zonei si viata exploratorului nascut in localitate, Knud Rasmussen. Zona gazduieste mii de caini din Groenlanda, folositi pentru sanii cu caini.",
    atractii: [
      "Ghetarul Seriaq Kujalleq",
      "Fjordul Ilulissat",
      "Plimbare cu ghid pe gheata",
    ],
    locatie: "https://www.google.com/maps/place/Ilulissat,+Groenlanda/data=!4m2!3m1!1s0x4ef2ac312385d59d:0xe228279619f90f6a?sa=X&ved=2ahUKEwiqqaqHn7mAAxVehP0HHb7qBHIQ8gF6BAgDEAA&ved=2ahUKEwiqqaqHn7mAAxVehP0HHb7qBHIQ8gF6BAghEAE",
    booking: "https://www.booking.com/searchresults.ro.html?ss=IlulissatGroenlanda",
    get_your_guide: "https://www.getyourguide.com/groenlanda-l169106/",
    selected: false,
  },
  {
    crt: 3,
    oras: "Nuuk, Groenlanda",
    img: "./files/img/nuuk.png",
    temp: -1.4,
    desc: "Nuuk, capitala Groenlandei, este un mic oras situat pe coasta de sud-vest a tarii. Sistemul sau larg de fiorduri este cunoscut pentru cascade, balene cu cocoasa si iceberguri. Linia de coasta este presarata cu case colorate in culori stralucitoare, la poalele muntelui Sermitsiaq. Muzeul National al Groenlandei expune mumii si ambarcatiuni traditionale ale inuitilor, in timp ce Muzeul de Arta din Nuuk prezinta lucrari locale.",
    atractii: [
      "Plaja Holt",
      "Cascada Dynjandi",
      "Excursie cu caiacul pe mare",
    ],
    locatie: "https://www.google.com/maps/place/Nuuk,+Greenland/@64.1791067,-51.70681,13z/data=!3m1!4b1!4m6!3m5!1s0x4ea20dce1ab32725:0x3de425fb4d692306!8m2!3d64.1743234!4d-51.7372787!16zL20vMGRfMW0?entry=ttu",
    booking: "https://www.booking.com/searchresults.ro.html?ss=NuukGroenlanda",
    get_your_guide: "https://www.getyourguide.com/nuuk-l32638/",
    selected: false,
  },
  {
    crt: 4,
    oras: "Vladivostok, Rusia",
    img: "./files/img/vladivostok.png",
    temp: 4.2,
    desc: "Vladivostok este un important oras portuar de pe coasta Pacificului din Rusia, cu vedere spre Golful Cornului de Aur, aproape de granitele cu China si Coreea de Nord. Este cunoscut ca punct terminus al Caii Ferate Trans-Siberiene, care leaga orasul de Moscova intr-o calatorie de 7 zile. In centrul orasului se afla Piata Centrala, unde un memorial inalt aduce omagiu soldatilor locali care au luptat impotriva fortelor japoneze la inceputul secolului al XX-lea.",
    atractii: [
      "Cetatea Vladivostok",
      "Podul Zolotoy Rog",
      "Calea Ferata Trans-siberiana",
    ],
    locatie: "https://www.google.com/maps/place/Vladivostok,+Primorsky+Krai,+Russia/@43.166587,131.953458,11z/data=!3m1!4b1!4m6!3m5!1s0x5fb39cba5249d485:0x186704d4dd967e35!8m2!3d43.1332484!4d131.9112975!16zL20vMGZkX3g?entry=ttu",
    booking: "https://www.booking.com/searchresults.ro.html?ss=VladivostokRusia",
    get_your_guide: "https://www.getyourguide.com/s/?q=Vladivostok%2C+Rusia",
    selected: false,
  },
  {
    crt: 5,
    oras: "Reykjavík, Islanda",
    img: "./files/img/reykjavik.png",
    temp: 4.3,
    desc: "Reykjavik, pe coasta Islandei, este capitala si cel mai mare oras al tarii. Aici se gasesc Muzeul National si Muzeul Saga, care urmaresc istoria vikingilor din Islanda. Biserica impresionanta Hallgrimskirkja din beton si cupola rotativa din sticla Perlan ofera privelisti panoramice asupra marii si dealurilor invecinate. Un exemplu al activitatii vulcanice a insulei este statiunea geotermala Blue Lagoon, situata aproape de satul Grindavik.",
    atractii: [
      "Laguna Albastra",
      "Aurora Boreala",
      "Cercul de aur",
    ],
    locatie: "https://www.google.com/maps/place/Reykjavik,+Islanda/data=!4m2!3m1!1s0x48d674b9eedcedc3:0xec912ca230d26071?sa=X&ved=2ahUKEwjc-ZjT4rmAAxVo7bsIHSP4BfkQ8gF6BAg9EAA&hl=en&ved=2ahUKEwjc-ZjT4rmAAxVo7bsIHSP4BfkQ8gF6BAg-EAI",
    booking: "https://www.booking.com/searchresults.ro.html?ss=ReykjavikIslanda",
    get_your_guide: "https://www.booking.com/searchresults.ro.html?ss=ReykjavíkIslanda",
    selected: false,
  },
  {
    crt: 6,
    oras: "Rio Grande, Argentina",
    img: "./files/img/rio-grande.png",
    temp: 5.9,
    desc: "Rio Grande este un oras din Argentina, situat pe coasta de nord a partii estice a Isla Grande de Tierra del Fuego. Are o populatie de 67.038 de locuitori si este capitala industriala a provinciei Tierra del Fuego. Orasul se afla la 212 de kilometri nord-est de Ushuaia, capitala provinciei.",
    atractii: [
      "Piata Almirante Brown",
      "Muzeul Virginia Choquintel",
      "Parcul national Tierra del Fuego",
    ],
    locatie: "https://www.google.com/maps/place/Rio+Grande,+Tierra+del+Fuego+Province,+Argentina/@-53.7790549,-67.7860899,12z/data=!3m1!4b1!4m15!1m8!3m7!1s0xbc4c22b5bad109bf:0x5498473dba43ebfc!2sUshuaia,+Tierra+del+Fuego+Province,+Argentina!3b1!8m2!3d-54.8019121!4d-68.3029511!16zL20vMDF6ZG5z!3m5!1s0xbc4b1644a97ec1cb:0x48273f4501527328!8m2!3d-53.7860374!4d-67.7002243!16zL20vMDN0OXM3?entry=ttu",
    booking: "https://www.booking.com/searchresults.ro.html?ss=RioGrandeArgentina",
    get_your_guide: "https://www.getyourguide.com/argentina-l168992/",
    selected: false,
  },
  {
    crt: 7,
    oras: "Vágur, Insulele Feroe",
    img: "./files/img/vagur.png",
    temp: 6.5,
    desc: "Vágur, care inseamna \"golf\", este un oras situat pe insula Suðuroy, parte din Insulele Feroe. Se afla pe coasta de est a insulei, pe fiordul Vágsfjørður, si a fost fondat in secolul al XIV-lea. Extinderea a facut ca orasul invecinat Nes sa devina acum un cartier suburban al orasului Vágur.",
    atractii: [
      "Cascada Múlafossur",
      "Mănăstirea Kirkjubøur",
      "Traseul Sumba",
    ],
    locatie: "https://www.google.com/maps/place/Vágur,+Faroe+Islands/@61.4727418,-6.8170167,13z/data=!3m1!4b1!4m6!3m5!1s0x48bde121a5ab4789:0x262f529cfacb312d!8m2!3d61.4761709!4d-6.8483065!16zL20vMGR2NGdf?entry=ttu",
    booking: "https://www.booking.com/searchresults.ro.html?ss=VagurInsuleleFeroe",
    get_your_guide: "https://www.getyourguide.com/insulele-feroe-l169096/",
    selected: false,
  },
  {
    crt: 8,
    oras: "Gothenburg, Suedia",
    img: "./files/img/gothenburg.png",
    temp: 7.8,
    desc: "Gothenburg, un oras important din Suedia, este situat langa raul Göta älv, pe coasta de vest a tarii. Un port maritim important, este cunoscut pentru canalele in stil olandez si bulevardele impadurite, precum Avenyn, artera principala a orasului, plina de numeroase cafenele si magazine. Liseberg este un parc de distractii popular, cu atractii tematice, sali de spectacole si o gradina amenajata cu sculpturi.",
    atractii: [
      "Universeum",
      "Teatrul Gothenburg",
      "Tur cu autobuzul amfibiu",
    ],
    locatie: "https://www.google.com/maps/place/Gothenburg,+Sweden/@57.7009921,11.8938365,10z/data=!3m1!4b1!4m6!3m5!1s0x464f8e67966c073f:0x4019078290e7c40!8m2!3d57.70887!4d11.97456!16zL20vMDM0M18?entry=ttu",
    booking: "https://www.booking.com/searchresults.ro.html?ss=GothenburgSuedia",
    get_your_guide: "https://www.getyourguide.com/goteborg-l479/",
    selected: false,
  },
  {
    crt: 9,
    oras: "Edinburgh, Scotia, UK",
    img: "./files/img/edinburgh.png",
    temp: 8.4,
    desc: "Edinburgh este capitala compacta si colinara a Scotiei. Are un centru vechi medieval si un centru nou, elegant, cu gradini si cladiri neoclasice. Deasupra orasului se inalta Castelul Edinburgh, locul in care sunt pastrate bijuteriile coroanei scotiene si Piatra Destinului, folosita in incoronarea conducatorilor scotieni. Varful impunator al muntelui Arthur's Seat ofera privelisti impresionante, iar dealul Calton Hill este presarat cu monumente si memoriale.",
    atractii: [
      "Castelul Edinburgh",
      "Palatul Holyrood",
      "Lacul Loch Ness",
    ],
    locatie: "https://www.google.com/maps/place/Edinburgh,+UK/@55.9412769,-3.287911,12z/data=!3m1!4b1!4m6!3m5!1s0x4887b800a5982623:0x64f2147b7ce71727!8m2!3d55.953252!4d-3.188267!16zL20vMDJtNzc?entry=ttu",
    booking: "https://www.booking.com/searchresults.ro.html?ss=EdinburghUK",
    get_your_guide: "https://www.getyourguide.com/edinburgh-l44/",
    selected: false,
  },
  {
    crt: 10,
    oras: "Copenhaga, Danemarca",
    img: "./files/img/copenhaga.png",
    temp: 8.6,
    desc: "Copenhaga, capitala Danemarcei, este situata pe insulele de coasta Zeeland si Amager. Este conectata la Malmö, in sudul Suediei, prin Podul Öresund. Indre By, centrul istoric al orasului, contine Frederiksstaden, un cartier rococo din secolul al XVIII-lea, locul in care se afla Palatul Amalienborg al familiei regale. In apropiere se gaseste Palatul Christiansborg si Castelul Rosenborg din epoca Renasterii, inconjurate de gradini si adapostind bijuteriile coroanei.",
    atractii: [
      "Gradinile Tivoli",
      "Palatul Christiansborg",
      "Canalul Nyhavn",
    ],
    locatie: "https://www.google.com/maps/place/copenhagen+denmark/data=!4m2!3m1!1s0x4652533c5c803d23:0x4dd7edde69467b8?sa=X&ved=2ahUKEwiggejz87mAAxUbJRAIHSrnB68Q8gF6BAgREAA&ved=2ahUKEwiggejz87mAAxUbJRAIHSrnB68Q8gF6BAgTEAE",
    booking: "https://www.booking.com/searchresults.ro.html?ss=CopenhagaDanemarca",
    get_your_guide: "https://www.getyourguide.com/copenhaga-l12/",
    selected: false,
  },
]

let el, i = 1;

addEventListener("DOMContentLoaded", (event) => {
  el = [
    "",
    [
      "",
      document.getElementById("t11"),
      document.getElementById("t12"),
      document.getElementById("t13"),
      document.getElementById("t14"),
      document.getElementById("t15"),
      document.getElementById("t16"),
      document.getElementById("t17"),
    ],
    [
      "",
      document.getElementById("t21"),
      document.getElementById("t22"),
      document.getElementById("t23"),
      document.getElementById("t24"),
      document.getElementById("t25"),
      document.getElementById("t26"),
      document.getElementById("t27"),
    ],
    [
      "",
      document.getElementById("t31"),
      document.getElementById("t32"),
      document.getElementById("t33"),
      document.getElementById("t34"),
      document.getElementById("t35"),
      document.getElementById("t36"),
      document.getElementById("t37"),
    ],
    document.getElementById("tb"),
  ];

  change_table(0);
});

function change_radio() {
  for (let j = 1; j <= 3; j++) {
    if (el[j][7].firstElementChild.checked) {
      for (let k = 1; k <= data.length - 1; k++) {
        data[k].selected = false;
      }
      data[i + j - 1].selected = true;
      console.log(data);
    }
    else data[i + j - 1].selected = false;
  }
}

function change_table(direction) {

  if (direction == 1 && i > 1) i--;
  if (direction == 2 && i < data.length - 3) i++;

  for (let j = 1; j <= 3; j++) {
    el[j][1].innerHTML = data[i + j - 1].crt;
    el[j][2].innerHTML = data[i + j - 1].oras;
    el[j][3].lastElementChild.src = data[i + j - 1].img;
    el[j][4].innerHTML = data[i + j - 1].temp + "°C";
    el[j][5].innerHTML = "<ol><li>" + data[i + j - 1].atractii[0] + "</li><li>" + data[i + j - 1].atractii[1] + "</li><li>" + data[i + j - 1].atractii[2] + "</li></ol>";
    el[j][6].firstElementChild.href = data[i + j - 1].locatie;
    el[j][7].firstElementChild.checked = data[i + j - 1].selected;
  }
}

function submit_table() {
  let is_value_selected = 0;
  for (let j = 1; j <= data.length - 1; j++) {
    if (data[j].selected) is_value_selected = j;
  }

  if (is_value_selected) overlay(is_value_selected);
  else {
    el[4].firstElementChild.value = "Eroare - nici o destinatie selectata";

    setTimeout(() => {
      el[4].firstElementChild.value = "Confirma destinatia"
    }, 2000);
  }
}