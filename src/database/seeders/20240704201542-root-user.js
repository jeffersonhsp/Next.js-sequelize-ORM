'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      user: 'admin',
      email: 'admin@email.com',
      password: '$2a$10$6NgzUVGQsc6XrhsNSxu46OCsaBjhb0EQzmDQGqhRrE8snbZJy0/Eu',
      createdAt: new Date(),
      updatedAt: new Date()
  }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {email: 'root@gmail.com'}, {})
  }
};
