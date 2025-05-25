'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      {
        tableName: 'PRODUTOS',
        schema: 'teste'
      },
      {
        IDT_PRODUTO: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        NM_PRODUTO: {
          type: Sequelize.STRING,
          allowNull: false
        },
        VLR_PRODUTO: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        DSC_PRODUTO: {
          type: Sequelize.STRING
        },
        DTH_CRIACAO: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        NM_USUARIO_CRIACAO: {
          type: Sequelize.STRING,
          allowNull: false
        },
        DTH_ALTERACAO: {
          type: Sequelize.DATE
        },
        NM_USUARIO_ALTERACAO: {
          type: Sequelize.STRING
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable({
      tableName: 'PRODUTOS',
      schema: 'teste'
    });
  }
};
