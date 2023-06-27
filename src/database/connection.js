const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./database/database.sqlite'
});

async function testeDatabase(){
    try {
        await sequelize.authenticate();
        console.log("Banco Conectado com Sucesso!");
    } catch (error) {
        console.log("Conexão Falhou! Erro: ", error);
    }
}

testeDatabase().then();

module.exports = sequelize;