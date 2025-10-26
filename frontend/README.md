*** Stack Front end ***
 - JavaScript
 - ReactJs
 - TailwindCSS
 - Vite

 - Bibiotecas Front end
   - Axios

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

 -----------------------------------------------------------------------------


 *** Emcriptar a senha do usuário ***
  - Utilizar a blibioteca bcryptjs
  - importar no projeto
  - Encriptar a senha utilizando um salt 
  - Depois fazer um hash na senha, passando 2 parametros (o salt, e o password original)


 -----------------------------------------------------------------------------


 * - Header - Front ✅
 * - Tela de Login Front ✅
 * - Roteamento com react router dom ✅
 * - Listar Usuários ✅
 * - Criar Usúarios ✅
 * - Conexão com banco de dados ✅
* - Organizando a arquitetura de pastas da aplicação ✅