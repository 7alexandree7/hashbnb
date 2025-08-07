* Projeto MERN
  - MongoDB
  - Express
  - Reactjs
  - Node

------------------------------------------------------------------------------------------------------------

* Libs utilizadas

 Style
  - TailwindCSS

 Front-End
  - HeroIcons
  - React router dom
  - Axios

 Back-End
  - Express
  - Mongoose
  - Dotenv
  - Bcryptjs
  - cors
  - jsonwebtoken (jwt)
  - cookie-parser

 Banco de dados
  - MongoDB


------------------------------------------------------------------------------------------------------------


*** ROADMAP ***

1 - Conectar o banco de dados na nossa aplicação
2 - Criar o modelo de user
3 - Criar rota de listagem de usuarios
4 - Criar a rota post para criar um novo usuario - requer um (middleware json) para funcionar
5 - Criar a pasta de rotas de users / organizar o código
6 - Criar a rota de login
7 - Mandar uma requisição do tipo post do frontend, enviando meus dados para a api
8 - Criar a tela de registro
9 - Manter a sessão do usuário logado no sistema, com os dados persistentes
    - Utilizar a lib (jwt)
    - Resolver o problema de deixar os cookies armazenados em dominios diferentes
      - Front (axios.defaults.withCredentials = true; )
      - Back add origin and credentials in cors -  origin: 'http://localhost:5173' credentials: true
    - Criar o jwt do usuario
    - Adicionar o jwt nos cookies da aplicação na requisição
    - Criar uma função async no app, dentro de um useEffect, para fazer uma requisição do tipo get em um endpoint
      para assim que carregar a pagina, fazer uma requisição uma unica vez, e ir buscar os cookies do usuario
    - Criar esse endpoint no back=end
      - Pegar o token do usuario pela requisição / validar com condicional setem o token ou não
      - Baixar a lib, para permitir a leitura em formato JSON dos cookies (cookie-parser)
      - Utilizar o metodo verify do jwt, para verificar se o token é valido e pertence a aquele usuario
10 - Fazer o front da requisição do resgister + conectar com o endpoint do back
    
