const Item = (args) => ({
  title: "",
  description: "",
  tag: "",
  tagKind: "",
  authorName: "username",
  authorAvatar: "/comunidade/avatar.png",
  relativeDate: "3 horas atrás",
  ...args,
});

import { ArrayDatabase } from "../assets/db.js";

const db = new ArrayDatabase("community");
window.$db = db;

function validate(string, name) {
  if (!!string.trim()) return string;
  alert(`O campo '${name}' está vazio.`);
  throw new Error("Validation error.");
}

const $form = document.querySelector("#topic-form");

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const els = event.currentTarget.elements;
  const newItem = Item({
    title: validate(els.title.value, "título"),
    description: validate(els.description.value, "descrição"),
    tagKind: els.tag.value,
    tag: els.tag.value === "D" ? "Dúvida" : "Bug",
  });
  const id = Date.now(); // "random" id
  db.insert(id, newItem);
  alert("Enviado!");
  window.location.replace("/comunidade");
});
