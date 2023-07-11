//importando biblioteca express
const express = require('express');
//importando biblioteca cors
const cors = require('cors');
//definindo uma constante com o tipo Express()
const app = express();
//transformando tudo em json
app.use(express.json());
app.use(cors());

//importa router que está no routes.js
const router = require('./routes.js');
//aplica no nosso app
app.use(router);

require('./usuarios/controllers/models/usuario.js');
require('./usuarios/controllers/models/cardsPermission.js');
require('./usuarios/controllers/models/propertyPermission.js');


//inicia a porta
app.listen(4300, () =>{
    console.log("Servidor rodando");
})