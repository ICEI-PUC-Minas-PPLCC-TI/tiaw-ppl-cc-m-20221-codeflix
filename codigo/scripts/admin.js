const adminList = [
  {
    user: "admin",
    password: "admin",
  },
  {
    user: "yuri",
    password: 123,
  },
];

const handleAdmLogin = () => {
  const user = document.querySelector("#admin").value;
  const password = document.querySelector("#password").value;

  let isValid = false;
  let loc = 0;

  adminList.map((item, value) => {
    if (item.user == user && item.password == password) {
      isValid = true;
      loc = value;
    }
  });

  if (isValid == false) {
    alert("Acesso negado");
  } else {
    localStorage.setItem("@admin", JSON.stringify(adminList[loc]));
    window.location = "/html/admin/cursos.html";
  }
};

const handleLogOut = () => {
  localStorage.removeItem("@admin");
  window.location = "/html/admin.html";
};

const middleWare = () => {
  const admin = localStorage.getItem("@admin");
  if (admin) {
    const adminParsed = JSON.parse(admin);
    if (adminParsed.user && adminParsed.password) {
      // acesso garantido
      console.log("Logado!");
    } else {
      alert("Acesso Negado");
      window.location = "/html/admin.html";
    }
  } else {
    alert("Acesso Negado");
    window.location = "/html/admin.html";
  }
};

const loadCourses = () => {
  console.log("fetch iniciado!");
  const coursesString = localStorage.getItem("@courses");
  if (!coursesString) {
    const basicData = `[{"name":"HTML Básico","description":"para iniciantes","stars":4,"view":"60%","svg":"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 86 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"43\" cy=\"43\" r=\"43\" fill=\"#ED9B68\"></circle>\n<path d=\"M23.3577 66.1215L18.987 17.8701H67.013L62.6374 66.1142L42.9707 71.4805L23.3577 66.1215Z\" fill=\"#E44D26\"></path>\n<path d=\"M43 67.3788L58.8919 63.042L62.6309 21.8153H43V67.3788Z\" fill=\"#F16529\"></path>\n<path d=\"M43 39.7112H35.044L34.4944 33.6509H43V27.7333H27.9237L28.0679 29.3209L29.5453 45.6291H43V39.7112ZM43 55.0803L42.9733 55.0876L36.2777 53.3075L35.85 48.5883H29.814L30.6562 57.88L42.9724 61.2451L43 61.2378V55.0803Z\" fill=\"#EBEBEB\"></path>\n<path d=\"M42.979 39.7112V45.6291H50.3824L49.6847 53.304L42.979 55.0855V61.2425L55.3048 57.88L55.3953 56.8803L56.8081 41.3004L56.9544 39.7112H55.3345H42.979ZM42.979 27.7333V33.6509H57.5018L57.6223 32.3213L57.8967 29.3209L58.0404 27.7333H42.979Z\" fill=\"white\"></path>\n</svg>","color":"#e44d26","customStyle":"linear-gradient(89.58deg, #d64d00 -1.92%, #e47d3b 98.71%);","playlist":[{"id":1,"name":"Conhecendo o básico","videos":[{"title":"O que é HTML","time":25,"watched":true},{"title":"Tags HTML","time":15,"watched":false}]},{"id":2,"name":"Mão na massa","videos":[{"title":"Tabelas e Listas","time":25,"watched":false},{"title":"Meta tags","time":15,"watched":false},{"title":"Seu primeiro site","time":35,"watched":false}]}]},{"name":"Javascript","description":"para iniciantes","stars":4,"view":"20%","svg":"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 86 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"43\" cy=\"43\" r=\"43\" fill=\"#EFBB3E\"></circle>\n<path d=\"M18 18H68.01V68.0104H18V18Z\" fill=\"#F0DB4F\"></path>\n<path d=\"M63.9172 56.0827C63.5509 53.8012 62.0632 51.8849 57.6564 50.0979C56.1255 49.3944 54.4189 48.8907 53.9104 47.7306C53.7298 47.0554 53.7058 46.6751 53.8201 46.2664C54.1481 44.9401 55.7312 44.5266 56.986 44.9069C57.7942 45.1778 58.5592 45.8006 59.0207 46.7941C61.1787 45.3967 61.1743 45.4059 62.6812 44.4455C62.1295 43.5902 61.8351 43.1955 61.4739 42.8296C60.176 41.3798 58.4074 40.6332 55.579 40.6903L54.1057 40.8809C52.6939 41.2376 51.3484 41.9787 50.5594 42.9722C48.192 45.6584 48.8672 50.3596 51.7479 52.2943C54.5859 54.4244 58.755 54.909 59.2875 56.9009C59.8057 59.3394 57.4954 60.1288 55.1991 59.8483C53.5069 59.4964 52.5657 58.6363 51.5482 57.0723C49.6753 58.1561 49.6753 58.1561 47.7498 59.2635C48.2064 60.2618 48.6862 60.7136 49.4516 61.5785C53.0742 65.2531 62.1395 65.0725 63.7654 59.5108C63.8313 59.3198 64.2692 58.0462 63.9172 56.0827V56.0827ZM45.187 40.9847H40.5094L40.4902 53.0782C40.4902 55.6501 40.6233 58.0079 40.205 58.7306C39.5207 60.152 37.7473 59.9758 36.9391 59.7001C36.1166 59.2958 35.6983 58.721 35.2137 57.9084C35.0807 57.6751 34.9808 57.4945 34.9473 57.4806L31.1441 59.8096C31.7765 61.1075 32.7081 62.2341 33.9014 62.966C35.6839 64.0358 38.0797 64.3638 40.5853 63.7885C42.216 63.3135 43.623 62.3296 44.3597 60.8319C45.4247 58.8684 45.1962 56.4918 45.1866 53.8632C45.2106 49.5746 45.187 45.2869 45.187 40.9847V40.9847Z\" fill=\"#323330\"></path>\n</svg>","color":"#f0db4f","customStyle":"background: linear-gradient(90deg, #db8a11 0%, #e7ab12 100%);","playlist":[{"id":1,"name":"Conhecendo o básico","videos":[{"title":"Por traz do JS","time":25,"watched":true},{"title":"Variaveis","time":25,"watched":true},{"title":"Lógica de programação","time":90,"watched":false}]},{"id":2,"name":"Calculadora","videos":[{"title":"Condições if/else","time":25,"watched":false},{"title":"Funções","time":15,"watched":false},{"title":"Calculadora funcional","time":55,"watched":true}]}]},{"name":"CSS Básico","description":"para iniciantes","stars":4,"view":"10%","svg":"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 86 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"43\" cy=\"43\" r=\"43\" fill=\"#6785DB\"></circle>\n<path d=\"M20.0592 72.7469L15 16H70.5941L65.5298 72.7384L42.7633 79.0501L20.0592 72.7469V72.7469Z\" fill=\"#1572B6\"></path>\n<path d=\"M42.7975 74.2258L61.1942 69.1253L65.5222 20.6395H42.7975V74.2258Z\" fill=\"#33A9DC\"></path>\n<path d=\"M42.7975 41.199H52.0071L52.6432 34.0721H42.7975V27.1122H60.2496L60.0826 28.9796L58.3717 48.1588H42.7975V41.199Z\" fill=\"white\"></path>\n<path d=\"M42.8388 59.2741L42.8081 59.2832L35.0572 57.1904L34.5615 51.6395H27.576L28.5508 62.5676L42.8071 66.5243L42.8388 66.5153V59.2741V59.2741Z\" fill=\"#EBEBEB\"></path>\n<path d=\"M51.4155 47.8645L50.5771 57.1849L42.8147 59.2802V66.5213L57.0826 62.5671L57.1872 61.3912L58.3979 47.8645H51.4155Z\" fill=\"white\"></path>\n<path d=\"M42.8212 27.1122V34.0721H26.0102L25.8708 32.5081L25.5538 28.9796L25.3872 27.1122H42.8212V27.1122ZM42.7976 41.2V48.1598H35.1444L35.005 46.5958L34.6874 43.0674L34.5214 41.2H42.7976V41.2Z\" fill=\"#EBEBEB\"></path>\n</svg>","color":"#33a9dc","customStyle":"background: linear-gradient(90deg,#043dcf -0.41%,#245def 100.54%);","playlist":[{"id":1,"name":"O que é CSS?","videos":[{"title":"Alinhamento","time":25,"watched":false},{"title":"Cores","time":25,"watched":false},{"title":"Altura & Largura","time":90,"watched":false}]},{"id":2,"name":"Estilizando","videos":[{"title":"Grid e Flex","time":25,"watched":false},{"title":"Variaveis","time":15,"watched":false},{"title":"Media - Responsividade","time":40,"watched":false}]}]}]`;
    localStorage.setItem(JSON.stringify(basicData));
    coursesString = basicData;
  } else {
    const courses = JSON.parse(coursesString);

    courses.map((item, pos) => {
      console.log(item.name);
      console.log(item.description);
      console.log(item.customStyle);

      const baseUrl = `
      <div id="course-${pos}" class="course-component" style="${item.customStyle};">
      <div class="left-side">
        <a href="cursoinfo.html?id=${pos}">${item.name}</a>
        <h3>${item.description}</h3>
  
        <div class="remover" onclick="removeCourse(${pos})">remover</div>
      </div>
      <div class="right-side">
        ${item.svg}
      </div>
    </div>
      `;

      document
        .querySelector(".course-list")
        .insertAdjacentHTML("beforeend", baseUrl);
    });
  }
};

const createCourse = () => {
  const title = document.querySelector("#title").value;
  const subtitle = document.querySelector("#subtitulo").value;
  const hexcode = document.querySelector("#hexcode").value;
  const svg = document.querySelector("#svgcode").value;
  const style = document.querySelector("#custom-style").value;

  console.log({
    title,
    subtitle,
    style,
    hexcode,
    svg,
  });

  const basicObject = {
    name: title,
    description: subtitle,
    stars: 4,
    view: "0%",
    svg: svg,
    color: hexcode,
    customStyle: style,
    playlist: [],
  };

  const coursesString = localStorage.getItem("@courses");
  let coursesParsed = JSON.parse(coursesString);

  coursesParsed.push(basicObject);

  localStorage.setItem("@courses", JSON.stringify(coursesParsed));
  alert("Curso Adicionado!");
  location.href = "/html/admin/cursos.html";
};

const removeCourse = (id) => {
  console.log(id);
  const coursesString = localStorage.getItem("@courses");
  const courseParsed = JSON.parse(coursesString);

  let newArray = [];

  courseParsed.map((item, pos) => {
    if (pos != id) {
      newArray.push(item);
    }
  });

  localStorage.setItem("@courses", JSON.stringify(newArray));

  alert("Curso deletado!");
  location.reload();
};

/*
  Listar dados da categoria
*/
const getCourseInfo = () => {
  const courseString = localStorage.getItem("@courses");
  const course = JSON.parse(courseString);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get("id");

  console.log(course[param]);

  document.querySelector(".course-title h1").textContent = course[param].name;
  document.querySelector(".course-title svg").outerHTML = course[param].svg;

  // Listando agora os titulos
  course[param].playlist.map((item, pos) => {
    const titleHtml = `
    <div class="title-container">
    <div style="border-color: ${course[param].color}; color: ${
      course[param].color
    }" class="numeration">${pos + 1}</div>
    <h3>${item.name}</h3>
    <div class="options-container">

      <div style="border-color: ${course[param].color}; color: ${
      course[param].color
    }"  onclick="newVideo(${pos})" class="novo-video">
        Novo Vídeo
      </div>

      <div onclick="removeCategoria(${pos})" class="deletar-categoria">
        Deletar
      </div>
    </div>

  </div>
    `;

    document.querySelector("main").insertAdjacentHTML("beforeend", titleHtml);

    // mandando agora a listagem dos videos
    item.videos.map((itemzinho, pos2) => {
      console.log(itemzinho);

      const videoHtml = `
      <div style="border-color: ${course[param].color}" class="conteudo">
      <div class="info">
        <h1>${itemzinho.title}</h1>
        <p>${itemzinho.time} mins</p>
      </div>
      <div class="deletar" onclick="removeVideo(${pos}, ${pos2})">
        <svg width="100%" height="100%" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58276 0.146323C7.46291 0.476154 6.41845 1.61126 6.26256 2.668L6.18405 3.19955L4.1714 3.23967C2.40076 3.27479 2.09858 3.30957 1.65936 3.52857C0.550868 4.08111 0.0868036 4.84106 0.00991713 6.22948C-0.0601045 7.49246 0.235334 8.12488 1.06648 8.49158C1.38014 8.63 1.59695 8.80529 1.59695 8.92042C1.59695 9.02754 1.93083 12.4527 2.3391 16.5318C2.86208 21.7596 3.14029 24.08 3.28184 24.3946C3.53409 24.9556 4.01263 25.4279 4.65493 25.7498C5.1492 25.9974 5.22372 26 12.0191 26C18.8144 26 18.8889 25.9974 19.3832 25.7498C20.0255 25.4279 20.504 24.9556 20.7563 24.3946C20.8978 24.08 21.176 21.7596 21.699 16.5318C22.1073 12.4527 22.4412 9.02754 22.4412 8.92042C22.4412 8.80611 22.6582 8.6285 22.9669 8.4903C23.7617 8.1345 24.0016 7.66404 24 6.46517C23.9984 5.32798 23.8174 4.75376 23.2823 4.18766C22.526 3.38771 22.1356 3.28326 19.739 3.23943L17.5987 3.20025L17.5206 2.71634C17.4183 2.08369 16.8094 1.1044 16.296 0.747439C15.274 0.0367652 15.252 0.0329394 12.0815 0.00534721C9.81606 -0.0143615 9.01961 0.0177521 8.58276 0.146323ZM15.2896 1.38531C15.849 1.7294 16.2532 2.26745 16.3841 2.84224L16.4699 3.21903H11.8879H7.30577L7.38016 2.7932C7.47839 2.23104 8.03257 1.60117 8.71868 1.27192C9.25514 1.01443 9.36248 1.0069 12.0285 1.04006C14.7812 1.07426 14.7846 1.0746 15.2896 1.38531ZM21.9846 4.52954C22.6114 4.9112 22.8146 5.37656 22.8151 6.43213C22.8156 7.46452 22.71 7.62451 22.0278 7.62451C21.86 7.62451 21.6547 7.70079 21.5715 7.79389C21.476 7.90078 21.1265 10.8676 20.6246 15.8327C20.187 20.1609 19.7769 23.8279 19.7129 23.9816C19.5855 24.2884 19.1604 24.6811 18.7361 24.8841C18.352 25.0679 5.68616 25.0679 5.30198 24.8841C4.87823 24.6814 4.45261 24.2886 4.32567 23.9828C4.23455 23.7635 2.72029 9.46948 2.72029 8.82906C2.72029 8.694 3.58576 8.66791 8.0624 8.66791C13.6839 8.66791 13.7041 8.66606 13.7041 8.14621C13.7041 7.62381 13.7124 7.62451 7.5549 7.62451C3.76138 7.62451 1.62054 7.58231 1.4639 7.50452C1.25608 7.40122 1.2225 7.25526 1.2225 6.45532C1.2225 5.1804 1.59146 4.57789 2.49674 4.37477C2.72266 4.32411 7.12254 4.29107 12.2743 4.3015C21.0726 4.31924 21.6619 4.33315 21.9846 4.52954ZM15.3345 7.88536C15.1404 8.35014 15.4444 8.60508 16.2393 8.64449C16.8635 8.67556 16.9566 8.64936 17.1385 8.39141C17.2968 8.16708 17.3111 8.05103 17.2034 7.86414C17.0856 7.65964 16.9463 7.62451 16.2544 7.62451C15.5289 7.62451 15.432 7.65199 15.3345 7.88536ZM6.90873 11.1284C6.73985 11.3522 6.71439 12.0671 6.71439 16.5848C6.71439 19.9468 6.76007 21.8629 6.84358 22.0079C6.98112 22.2465 7.4035 22.3003 7.71292 22.1188C7.87405 22.0242 7.90501 21.2704 7.93509 16.7145C7.96554 12.0871 7.94557 11.3855 7.7762 11.1454C7.53268 10.8003 7.16161 10.793 6.90873 11.1284ZM11.6072 11.0098C11.3915 11.2101 11.3915 21.8927 11.6072 22.093C11.6895 22.1696 11.8749 22.2322 12.0191 22.2322C12.5814 22.2322 12.5807 22.2382 12.5807 16.5514C12.5807 10.8646 12.5814 10.8707 12.0191 10.8707C11.8749 10.8707 11.6895 10.9333 11.6072 11.0098ZM16.2619 11.1454C16.0925 11.3855 16.0726 12.0871 16.103 16.7145C16.1331 21.2704 16.1641 22.0242 16.3252 22.1188C16.6346 22.3003 17.057 22.2465 17.1945 22.0079C17.278 21.8629 17.3237 19.9468 17.3237 16.5848C17.3237 12.0671 17.2983 11.3522 17.1294 11.1284C16.8765 10.793 16.5054 10.8003 16.2619 11.1454Z" fill="#FF0000"/>
          </svg>
          

      </div>
    </div>
      `;

      document.querySelector("main").insertAdjacentHTML("beforeend", videoHtml);
    });
  });

  const createCategoria = `
  <div class="create-categoria" onclick="createCategoria()">
  Nova categoria
</div>

  `;

  document
    .querySelector("main")
    .insertAdjacentHTML("beforeend", createCategoria);
};

const createCategoria = () => {
  const courseString = localStorage.getItem("@courses");
  let course = JSON.parse(courseString);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get("id");

  const nomeCategoria = prompt("Digite o nome da nova categoria");

  course[param].playlist.push({
    name: nomeCategoria,
    videos: [],
  });

  localStorage.setItem("@courses", JSON.stringify(course));

  location.reload();
};

const removeCategoria = (id) => {
  console.log(id);
  const cursoString = localStorage.getItem("@courses");
  let cursos = JSON.parse(cursoString);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get("id");

  console.log(cursos[param].playlist[id]);

  let newPlaylist = [];

  cursos[param].playlist.map((item, pos) => {
    if (pos != id) {
      newPlaylist.push(item);
    }
  });

  cursos[param].playlist = newPlaylist;

  localStorage.setItem("@courses", JSON.stringify(cursos));
  location.reload();
};

const newVideo = (id) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get("id");

  location.href = `/html/admin/novovideo.html?id=${param}/${id}`;
};

const createVideo = () => {
  const title = document.querySelector("#title").value;
  const tempo = document.querySelector("#tempo").value;
  const url = document.querySelector("#url").value;

  console.log("criar video!");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get("id");

  const course = param.split("/")[0];
  const playlist = param.split("/")[1];

  const cursoString = localStorage.getItem("@courses");
  let cursos = JSON.parse(cursoString);

  console.log(cursos[course].playlist[playlist]);

  if (title && tempo && url) {
    const newVideo = {
      title,
      time: tempo,
      watched: false,
      url,
    };

    cursos[course].playlist[playlist].videos.push(newVideo);

    localStorage.setItem("@courses", JSON.stringify(cursos));
    alert("Curso criado!");
    location.href = "/html/admin/cursos.html";
  } else {
    alert("Complete todos os campos!");
  }
};

const newVideoCourseInfo = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get("id");

  const course = param.split("/")[0];

  const cursoString = localStorage.getItem("@courses");
  let cursos = JSON.parse(cursoString);

  document.querySelector("#title span");
  document.querySelector(
    ".title span"
  ).style = `color: ${cursos[course].color}`;
  document.querySelector(
    ".cta-submit"
  ).style = `background-color: ${cursos[course].color}`;
  document.querySelector(".subtitle").innerHTML = cursos[course].name;
};

const removeVideo = (playlist, video) => {
  console.log("clicou pra remover!", playlist, video);

  const cursoString = localStorage.getItem("@courses");
  let cursos = JSON.parse(cursoString);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const param = urlParams.get("id");

  let newPlaylist = [];

  console.log(cursos[param].playlist[playlist]);
  cursos[param].playlist[playlist].videos.map((item, loc) => {
    if (loc != video) {
      newPlaylist.push(item);
    }
  });

  cursos[param].playlist[playlist].videos = newPlaylist;

  localStorage.setItem("@courses", JSON.stringify(cursos));

  location.reload();
};
