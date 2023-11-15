const express = require("express");
const app = express();
const User = require("./models/users")
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(express.json());

app.get("/", async (req, res) => {
    const returno = await User.findAll();
    res.send(returno)
})

app.post("/cadastrar", async (req, res) => {
    console.log(req.body)

    await User.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Foi cadastrado com sucesso"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Não foi cadastrado com sucesso"
            })
        })
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anthony321',
    database: 'registrosvue'
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao MySQL: ' + err.stack);
      return;
    }
    console.log('Conexão bem-sucedida ao MySQL com ID ' + db.threadId);
  });
  
  // Configuração da sessão
  app.use(session({
    secret: 'secretpass',
    resave: false,
    saveUninitialized: false
  }));
  
  // Configuração do bodyParser para processar dados do formulário
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // Rotas
  app.get('/', (req, res) => {
    res.send('Página inicial');
  });
  
  // Rota para exibir o formulário de login
  app.get('/login', (req, res) => {
    res.send(`
      <form action="/login" method="post">
        <label for="username">Nome de usuário:</label>
        <input type="text" id="email" name="email" required><br>
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required><br>
        <input type="submit" value="Login">
      </form>
    `);

    return res.redirect('/catalogo');

  });
  
  // Rota para processar o formulário de login
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Consulta ao banco de dados para obter o usuário com o nome de usuário fornecido
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) {
        console.error('Erro ao consultar o banco de dados: ' + err);
        return res.send('Erro interno.');
      }
  
      if (results.length > 0) {
        const user = results[0];
  
        // Verifica a senha usando bcrypt
        bcrypt.compare(password, user.password, (bcryptErr, isMatch) => {
          if (bcryptErr) {
            console.error('Erro ao comparar senhas: ' + bcryptErr);
            return res.send('Erro interno.');
          }
  
          if (isMatch) {
            // Login bem-sucedido, armazena o usuário na sessão
            req.session.user = user;
            return res.redirect('/catalogo');
          } else {
            return res.send('Nome de usuário ou senha incorretos.');
          }
        });
      } else {
        return res.send('Nome de usuário ou senha incorretos.');
      }
    });
  });
  

app.listen(8090, () => {
    console.log("Ta dando certo mn")
})