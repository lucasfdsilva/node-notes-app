const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title updates',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Method to Remove a note',
    builder: {
      title: {
        describe: "Title of note to be deleted",
        demandOption: true,
        type: String
      }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Notes title',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();