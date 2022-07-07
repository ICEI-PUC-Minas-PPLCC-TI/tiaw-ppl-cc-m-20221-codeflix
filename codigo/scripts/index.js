const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");

const handleRegister = () => {
  const infos = {
    user: user.value,
    email: email.value,
    password: password.value,
  };

  const userDB = localStorage.getItem("@userDB");
  if (userDB) {
    let userDBParse = JSON.parse(userDB);
    userDBParse.push(infos);
    localStorage.setItem("@userDB", JSON.stringify(userDBParse));
  } else {
    localStorage.setItem("@userDB", JSON.stringify([infos]));
  }
};
