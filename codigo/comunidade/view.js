import { ArrayDatabase } from "../assets/db.js";

const db = new ArrayDatabase("community");
window.$db = db;

const $zone = document.querySelector("#view-topic-zone");
const id = parseInt(location.hash.slice(1), 10);

const user = db.getById(id);

if (Number.isNaN(id) || !user) {
  $zone.innerHTML = `
    <h1>Erro 404: Tópico não encontrado</h1>
  `;
  throw new Error("not found");
}

const sections = document.querySelectorAll("[data-inject]");
for (const section of sections) {
  // prop1,val1|prop2,val2|prop3,val3
  const injections = section.dataset.inject.split("|");
  for (const injection of injections) {
    const [prop, val] = injection.split(",");
    section[prop] = user[val];
  }
}

document.querySelector("#delete").addEventListener("click", () => {
  db.delete(id);
  alert("Tópico apagado com sucesso.");
  location.replace("/comunidade");
});
