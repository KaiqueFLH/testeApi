const { DataTypes, Model } = require('sequelize');
const connection = require('../../../database/connection');

class PropertyPermission extends Model{

}

PropertyPermission.init({
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
    modelName:'propertyPermission'
});

PropertyPermission.sync()
.then(() => {
    console.log("PropertyPermission Sincronizado");
})
.catch((e) => {
    console.log("PropertyPermission não Sincronizado! Erro: ",e);
})

module.exports = PropertyPermission;