const criarTarefa = (evento) => {
  evento.preventDefault();

  var hoje = new Date();
  var data = hoje.getDate() + "/" + (hoje.getMonth() + 1);

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const tarefa = document.createElement("ul");
  const linha = document.createElement("hr");
  tarefa.classList.add("comentarios_secao-grid");
  tarefa.classList.add("texto");
  linha.classList.add("comentario_secao-linha");
  linha.classList.add("linha");

  const conteudo = `
    <ul class="comentarios_secao-grid texto">
          <div class="comentarios_secao-img">
          <li><img class="imagem-macaco" src="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg"/></li>
        </div>
                                    <li class="comentarios_secao-nome">Nft Boy</li>
                                    <li class="comentario_secao-data">${data}</li>
                                    <div class="comentario-coracao">
                                      <vl class="linha-vertical"></vl>
                                      <div class="secao-img">
                                          <img src="./imagens/heart-svgrepo-com.svg" id="img1" class="comentario_secao-comentario-img inativo" alt="coração de like">
                                      </div>
                                          <p class="texto contagem-comentario" id="contagem1">0</p>
                                      <vl class="linha-vertical"></vl>
                                    </div>  
    </ul> 
      <div class="comentario_secao-texto">
              <li class="texto">${valor}</li>              
      </div>               
    `;

  tarefa.innerHTML = conteudo;

  if (valor != 0) {
    lista.appendChild(tarefa);
    lista.appendChild(linha);
  }

  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);
