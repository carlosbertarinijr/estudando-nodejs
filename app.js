const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//Estrutura para trabalhar com html usando express 'handlebars
  //Config
    //Template Engine
      app.engine('handlebars', handlebars({defaultLayout: 'main'}))
      app.set('view engine', 'handlebars')
    //Body Parser
      app.use(bodyParser.urlencoded({extended: false }))
      app.use(bodyParser.json())

//Rotas 
    app.get('/', (req, res) => {
      Post.findAll({
        order: [ 
          ['id', 'DESC'] 
        ]
      }).then(posts => {
        res.render('home', {posts: posts})
      })
    })

    app.get('/cad', (_req, res) => {
      res.render('formulario')
    })

    app.post('/add', (req, res) => {
      Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
      })
      .then(() => {
        res.redirect('/')
      })
      .catch( error => {
        res.send('Falha ao criar Post' + error)
      })
    })

    app.get('/deletar/:id', (req, res) => {
      Post.destroy({
        where: {
          'id': req.params.id
        }
      }).then(() => {
        res.send("Postagem deletada com sucesso!")
      }).catch(error => {
        res.send('Erro: '+ error)
      })
    })


//#####################//#############################

//Estrutura do Express para rotas;
// app.get("/", (_req, res) => {
//  res.sendFile(`${__dirname}/html/index.html`);
// });

// app.get("/batatas", (_req, res) => {
//   res.sendFile(`${__dirname}/html/batatas.html`);
// });

// app.get("/cenoura", (_req, res) => {
//   res.send("Cenouras aqui");
// });

// app.get("/ola/:nome/:cargo", (req, res) => {
//   res.send("<h1>" + `Olá Mr. ${req.params.nome}`+ "</h1>"
//     +"<h2>" + `Seu cargo é: ${req.params.cargo}`+ "</h2>"
//   );
// });

app.listen(8081, () => {
  console.log("Servidor rodando na url http://localhost:8081");
});