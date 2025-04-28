<div align="center">
   <h3>aurinews | A Tabnews clone</h3>
</div>

<p align="center">
   <a href="https://www.instagram.com/aurigod97/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-aurigod97-0390fc?style=flat&logo=Instagram&logoColor=white&color=blue" />
   </a>
    <a href="https://www.linkedin.com/in/aurino-junior-7718a4158/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-Aurino%20Junior-0390fc?style=flat&logo=Linkedin&logoColor=white&color=blue" />
   </a>
</p>

📍 **Conteúdo**

- [Contexto](#blue_book-contexto)
- [Tecnologias](#computer-tecnologias)
- [Iniciando o projeto](#video_game-iniciando-o-projeto)
- [Como usar](#beers-links-uteis)
- [Licença](#page_with_curl-licença)

## :blue_book: Contexto

Esse projeto foi criado ao longo dos dias do https://curso.dev com o professor Filipe Deschamps.

## :computer: Tecnologias

- NextJs 13
- React
- Docker
- PostgreSQL

## :video_game: Iniciando o projeto

1. Clone o repositorio e instale as dependencias com `yarn install`.
2. Crie o arquivo `.env` a partir do `.env.example`
3. Garanta que o docker está iniciado no sistema.
4. Rode o comando `yarn dev` para subir os containers, o server da aplicação e rodar as migrations.
5. É possivel rodar os testes isoladamente com o comandao `yarn test`.
6. Em construção...

## :beers: Links uteis

**Site url:** https://aurinews.com.br/
**Hospedagem:** https://vercel.com/
**Banco de dados:** https://console.neon.tech/

### Padrão de commits

Por conveção o projeto possui uma validação no hook `commit-msg` onde é validado se a mensagem de commit segue as regras do `commitlint`.

Para referências futuras essas são as principais do projeto:

- feat: Adiciona uma nova funcionalidade ao código.
- fix: Corrige um bug no código.
- docs: Alterações na documentação, sem modificar o código-fonte.
- test: Adição, remoção ou modificação de testes apenas testes.
- refactor: Melhorias no código sem alterar comportamento (nem bug nem feature nova).
- chore: Configurações do projeto, fora da pasta src ou test.
- ci: Alterações em arquivos de configuração de CI/CD.

## :page_with_curl: Licença

MIT
