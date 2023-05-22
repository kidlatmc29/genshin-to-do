const { SlashCommandBuilder } = require('discord.js');
const db = require('../../database/database.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addnewtodo')
    .setDescription('Add a to-do item')
    .addStringOption(option =>
      option.setName('dayoftheweek')
        .setDescription('Day of the week')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('todo')
        .setDescription('To-do item')
        .setRequired(true)
    ),
  async execute(interaction, db) {
    const dayOfWeek = interaction.options.getString('dayoftheweek');
    const todoItem = interaction.options.getString('todo');

    try {
      // Execute the SQL query to insert the to-do item into the database
      db.run('INSERT INTO todos (day_of_week, todo_item) VALUES (?, ?)', [dayOfWeek, todoItem], function (err) {
        if (err) {
          console.error(err);
          return interaction.reply('An error occurred while adding the to-do item.');
        }
        interaction.reply('To-do item added successfully.');
      });
    } catch (error) {
      console.error(error);
      interaction.reply('An error occurred while adding the to-do item.');
    }
  },
};
