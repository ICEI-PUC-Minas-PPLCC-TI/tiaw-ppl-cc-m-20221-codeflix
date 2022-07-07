/*
=--==-=-=-=-=-=-=-
NORMAL REGISTER
=--==-=-=-=-=-=-=-
*/

const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");

const handleRegister = () => {
  const infos = {
    user: user.value,
    email: email.value,
    password: password.value,
    level: 1,
    next: "60%",
    photo_url:
      "https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg",
    ranking: 502,
    watched: 0,
  };

  const userDB = localStorage.getItem("@userDB");
  if (userDB) {
    let userDBParse = JSON.parse(userDB);
    userDBParse.push(infos);
    localStorage.setItem("@userDB", JSON.stringify(userDBParse));
    localStorage.setItem("@user", JSON.stringify(infos));
    window.location = "/html/cursos.html";
  } else {
    localStorage.setItem("@userDB", JSON.stringify([infos]));
  }
};

/*
=--==-=-=-=-=-=-=-
NORMAL LOGIN
=--==-=-=-=-=-=-=-
*/

const handleLogin = () => {
  const infos = {
    user: user.value,
    password: password.value,
  };

  const userDB = localStorage.getItem("@userDB");
  if (userDB) {
    let userDBParse = JSON.parse(userDB);
    let finded = false;
    userDBParse.map((item) => {
      if (item.user == infos.user && item.password == infos.password) {
        localStorage.setItem("@user", JSON.stringify(item));
        finded = true;
      }
    });

    if (finded == false) {
      alert("Usuário e senha não coincidem!");
    } else {
      window.location = "/html/cursos.html";
    }
  }

  console.log(infos);
};
