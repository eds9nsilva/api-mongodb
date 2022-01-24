# Api-MongoDB

### Descrição :memo: :page_facing_up:
A aplicação utiliza TypeScript com o banco de dados MongoDB. <br>
E para realizar a conexão com o banco de dados se tem o framework Mongoose, e utiliza-se de JWT para autenticação

### Algumas Tecnologias 💻   &nbsp; :iphone: <br>

## Getting started
[Express](https://expressjs.com/pt-br/) -- O Express para criação do servidor e rotas <br>
[Mongoose](https://www.mongodb.com/) Usei o Mongoose com ORM para fazer as conexeções com o banco de dados <br>
[dotenv](https://www.npmjs.com/package/dotenv) Dotenv para utilizar variavel de forma global <br>
[jsonwebtoken](https://jwt.io/) E JWT para criação de tokens na autenticação <br>
[Multer](https://www.npmjs.com/package/multer) Multer para upload de arquivos <br>
[Yarn](https://yarnpkg.com/) -- O Yarn como gerenciador de pacote. <br>


## Instalação :wrench:
Depois de clonado o repositório na sua máquina<br>
*Instalando as dependências*
```

yarn install

```

Depois de instaladas as dependências só iniciar o servidor<br>
```

yarn dev

```
Métodos	Endpoint (Rotas)	<br>Descrição <br>
POST	/users	(Logar com um usuário) <br><br>
POST	/classes	(Criar uma nova aula) <br><br>
GET	/classes/:id	(Obter detalhes de uma aula pelo o id) <br><br>
PUT	/classes	(Atualizar o cadastro de uma aula)<br><br>
DELETE	/classes/:id	(Excluir o cadastro de uma aula) <br><br>
POST	/classes/comments	(Cadastrar um comentário de uma aula) <br><br>
GET	/classes/comments	(Listar todos os comentários de uma aula) <br><br>
DELETE	/classes/comments/:id	(Excluir um comentário) <br><br>
		


## Testar as rotas :wrench:

O arquivo do Insomnia(JSON) de rotas está na pasta 'Testes'


## Meu contato :iphone:
Email: antonioedson99@gmail.com <br>>
LinkedIn: [Edson silva](https://www.linkedin.com/in/edson-da-silva-882608135/)

