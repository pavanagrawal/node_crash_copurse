const { require } = require("yargs")

const fs = require('fs')

const getNotes = function(){
    return 'This is my notes...'
}

const addNote = function(title, body){
    const notes = loadNotes()
}

const loadNotes = function(){
    const dataBuffer = fs.readFileSync('notes.json')
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}