// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./note')


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function(){
        console.log('Listing notes..')
    }
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('Read a note..')
    }
})
yargs.parse()


