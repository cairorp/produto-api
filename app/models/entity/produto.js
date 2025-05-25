const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Produto = sequelize.define('Produto', {
    IDT_PRODUTO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NM_PRODUTO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    VLR_PRODUTO: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    DSC_PRODUTO: {
        type: DataTypes.STRING,
    },
    DTH_CRIACAO: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    DTH_ALTERACAO: {
        type: DataTypes.DATE,
    },
    NM_USUARIO_CRIACAO: {
        type: DataTypes.STRING,
        allowNull: false
    },
     NM_USUARIO_ALTERACAO: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'PRODUTOS',
    schema: 'teste',
    timestamps: false
});

module.exports = Produto;