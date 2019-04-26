"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tasks",
      [
        {
          text: "Make TODO",
          isCompleted: false
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {}
};
