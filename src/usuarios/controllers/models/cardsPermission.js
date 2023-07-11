const { DataTypes, Model } = require('sequelize');
const connection = require('../../../database/connection');

class CardsPermission extends Model{

}

CardsPermission.init({
    id_usuario:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        foreignKeys:true
    },
    permission:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    }
},{
    sequelize:connection,
    modelName:'cardPermission'
});

CardsPermission.sync()
.then(() => {
    console.log("CardPermission Sincronizado");
})
.catch((e) => {
    console.log("CardPermission não Sincronizado! Erro: ",e);
})

module.exports = CardsPermission;