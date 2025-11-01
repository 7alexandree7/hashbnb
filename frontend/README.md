*** Stack Front end ***
 - JavaScript
 - ReactJs
 - TailwindCSS
 - Vite

 - Bibiotecas Front end
   - Axios
   - react-router-dom

 - Ícones
  - Heroicons

-----------------------------------------------------------------------------

*** Stack Back end ***
 - JavaScript
 - NodeJs
 - MongoDB

 - Bibiotecas Back end
   - Express
   - Dotenv
   - Mongoose
   - Bcryptjs
   - Cors
   - JsonWebToken
   - cookie-parser

-----------------------------------------------------------------------------


*** Passo a passo MongoDB ***
 - Criar um novo projeto
 - Criar um cluster
 - Ir em network acess e permitir todos os IP, para depois da nuvem, conseguirem acessar a aplicação
 - Ir em browser colection
 - Criar uma dataBase incial / depois criamos mais pelo propio node.js
 - Criar uma pasta config, com um arquivo db.js para fazer a conexção com o banco (usando o mongoose) - tem que ter try catch e ser assincrono
 - Criar um model (modelo) para determinar os tipos de dados que nossa collection pode receber
 - Criar uma rota get para listar os usuarios do banco, porem temos que apagar a nossa collection que criamos no inicio, pois o mongo criara outra automaticamente

 - Rota de get - Listar todos os usarios com o find()
 - Rota de post - Para criar usários 

 - find() - Encontrar todos os usuarios
 - findOne() - Encontrar o primeiro usuário passado por um parametro

 -----------------------------------------------------------------------------


 *** Emcriptar a senha do usuário ***
  - Utilizar a blibioteca bcryptjs
  - importar no projeto
  - Encriptar a senha utilizando um salt 
  - Depois fazer um hash na senha, passando 2 parametros (o salt, e o password original)


 -----------------------------------------------------------------------------


 *** Json Web Token (JWT)  -  COOKIES ***
   - Utilizar o jwt.signin() - passando as informações do usuario / JWT_SECRET, e o {expireIn} caso queira q a sessão se encerre em um tempo especifico
   - Esse JWT_SECRET é um codigo aleatorio, que adicionaremos em uma variavel env, para o jwt fazer a criptografia necessaria e validar se pertence ao usuario
   - Inserir via cookies na requisição de login, o token do usuario gerado pelo jwt, mas o json do usuario

   * resolvendo problema do cookie
     - No front *** axios.defaults.withCredentials = true ***
     - No back *** app.use(cors({ origin: 'http://localhost:5173', credentials: true })) ***

   * Fazer uma função async do tipo get, para sempre que nossa pagina carregar, olhar se tem um token na aplicação

   * Fazer um endpoint no back-end para entregar ao front esse cookies
     - Receber os cookies da req
     - verificar se existe um token
     - armazenar em uma variavel e Utilizar o jwt.verify(token, JWT_SECRET)
     - Depois respondendo em json o userInfo
     - Utilizar a lib cookie parser, para conseguir ler os cookies das requisições
     - utilizar o cokkie ja descriptado e inserir na variavel de estado, deixando os dados do usuario permanente

     - clearCookies no back para limpar os cookies / limpar o user

  -----------------------------------------------------------------------------

*** CONTEXT ***
  - Criação da pagina Context
  - Criar o context com o createContext(null) do react / vai armazenar o contexto do usuário
  - exportar esse context para envolver toda nossa aplicação
  - Criar dentro do context, um componente / provider onde todas nossas informações serão passadas para o resto da aplicação recebendo o children
  - Depois precisamos usar o value={{}} para determinar quais informações nosso contexto vai poder passar para os componentes / pages
  - Para usar o contexto que criamos, usamos o hook useContext() passando qual informação de dentro do contexto cada componente / page precisa
  - Para não ter que em todos os componentes / pages importar o useContext e o contexto, dentro do contexto fazemos uma função que ela ja chama nosso contexto dentro do useContext
  

  -----------------------------------------------------------------------------


