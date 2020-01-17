const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customizing yargs version
yargs.version('1.1.0');

// Create Add Command
yargs.command({
  command: "add",
  describe: "Add a new note command",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Notes body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  }
});

// Create Remove Command
yargs.command({
  command: "remove",
  describe: "Removes all my notes",
  handler: function(){
    console.log("Removing Notes...")
  }
});

// Create Listing Command
yargs.command({
  command: "list",
  describe: "lists all my notes",
  handler: function(){
    console.log("Listing Notes...")
  }
});

// Create Read Command
yargs.command({
  command: "read",
  describe: "Reads the notes",
  handler: function(){
    console.log("Reading Notes...")
  }
})

yargs.parse();