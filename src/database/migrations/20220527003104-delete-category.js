'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.dropTable('categories');
     
  },

  async down (queryInterface, Sequelize) {
   
   await queryInterface.dropTable('users');
     
  }
};
