const loggedSession = localStorage.getItem("@user");

if (!loggedSession) {
  alert("Voce nao esta logado!");
  window.location = "/html/auth/index.html";
}
