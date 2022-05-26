import { ArrayDatabase } from "../assets/db.js";

const db = new ArrayDatabase("community");
window.$db = db;

if (db.getAll().length === 0) {
  const Item = (title, tag) => ({
    title,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu. Ad litora torquent...",
    authorName: "username",
    authorAvatar: "/comunidade/avatar.png",
    relativeDate: "3 horas atrás",
    tag,
    tagKind: tag[0],
  });
  const DEFAULT = [
    Item("O código não ta compilando", "Bug"),
    Item("Dúvida de HTML", "Dúvida"),
    Item("Qual a diferença entre HTML e XML?", "Dúvida"),
    Item("Segfault em C", "Bug"),
    Item("Por que Rust não dá segfault?", "Dúvida"),
    Item("O código não ta compilando", "Bug"),
    Item("O código não ta compilando", "Bug"),
    Item("O código não ta compilando", "Bug"),
    Item("O código não ta compilando", "Bug"),
  ];
  let i = 1;
  for (const o of DEFAULT) {
    db.insert(i++, o);
  }
}

//
// Create the elements on the page.
//

const all = db.getAll();
const $zone = document.querySelector("#cards-zone");

$zone.innerHTML = "";

for (const entry of all) {
  const div = document.createElement("div");
  div.classList.add("card");

  // I really don't care about XSS here. We're using `localStorage` as our database,
  // so do you really think XSS would make things any worse??!?!
  div.innerHTML = `
    <h3 class="card__title">
      <a href="./view.html?id=${entry.id}">${entry.title}</a>
    </h3>
    <p class="card__desc">${entry.description}</p>
    <footer class="card__footer">
      <div class="card__author-profile">
        <img src="${entry.authorAvatar}" alt="Avatar de ${entry.authorName}" />
        <div>
          <span>${entry.authorName}</span>
          <time>${entry.relativeDate}</time>
        </div>
      </div>
      <div class="card__tag-wrapper">
        <span class="tag tag-${entry.tagKind}">${entry.tag}</span>
      </div>
    </footer>
  `;

  $zone.append(div);
}
