const { DataTypes, Model } = require('sequelize');
const connection = require('../../../database/connection');

class Usuario extends Model{

}

Usuario.init({
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    senha:{
        type:DataTypes.STRING, 
        allowNull:false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    sequelize:connection,
    modelName:'usuarios'
});

Usuario.sync()
.then(() => {
    console.log("Usuario Sincronizado");
})
.catch((e) => {
    console.log("Usuario não Sincronizado! Erro: ",e);
})

module.exports = Usuario;