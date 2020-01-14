const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customizing yargs

// Listing Command
yargs.command({
  command: "list",
  describe: "lists all my notes",
  handler: function(){
    console.log("Listing Notes...")
  }
});

// Read Command
yargs.command({
  command: "read",
  describe: "Reads the notes",
  handler: function(){
    console.log("Reading Notes...")
  }
})

console.log(yargs.argv)