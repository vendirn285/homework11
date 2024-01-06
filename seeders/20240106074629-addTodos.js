'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Todos', [
    {
    title: 'Morning Workout',
    status: 'In Progress',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    title: 'Baca minimal 10 halaman buku',
    status: 'In Progress',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    title: 'Belajar Docker',
    status: 'In Progress',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    title: 'Kerjain Homework Rakamin',
    status: 'In Progress',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
    title: 'Main Badminton',
    status: 'In Progress',
    createdAt: new Date(),
    updatedAt: new Date()
    }
  ])
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
