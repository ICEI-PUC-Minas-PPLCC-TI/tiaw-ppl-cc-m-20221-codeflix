# Estruturas de Dados

Desenvolveu-se o módulo `/codigo/assets/db.js` para gerenciar o armazenamento de dados em `localStorage` com uma API um pouco mais agradável. Para isso, existem as classes `Database` e `ArrayDatabase`, que possuem métodos ORM-like.

Para armazenar os tópicos criados na seção comunidade, estabeleceu-se a coleção `community`, um array de objetos com a seguinte estrutura (em notação similar a tipos TypeScript):

```ts
Array<{
    title: string,
    description: string,
    authorName: string,
    authorAvatar: string,
    relativeDate: string,
    tag: string,
    tagKind: string,
}>
```

Tal que:

- `title` representa o nome do tópico.
- `description` representa um breve resumo do tópico.
- `authorName` representa o nome do autor que abriu o tópico.
- `authorAvatar`, que contém uma URL para a imagem correspondente ao avatar do autor do tópico.
- `relativeDate`, que contém uma string com data da criação do tópico, relativa ao dia atual.
- `tag`, que contém o nome da tag.
- `tagKind`, que contém informação relevante para a estilização da tag. Não é visível ao utilizador.
