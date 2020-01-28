const fs = require('fs')
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added to cache!'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if(notesToKeep.length < notes.length){
    console.log(chalk.green(title + ': Note Removed'));
    saveNotes(notesToKeep);
  }else{
    console.log(chalk.red(title + ': Note not found'));
  }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.green('Title: ' + `"${note.title}"`) + chalk.yellow(' Body: ' + `"${note.body}"`));
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteResult = notes.find((note) => note.title === title)

    if(noteResult){
        console.log(chalk.green('Note Found: ' + 'Title: ' + `"${noteResult.title}"` + ' Body: ' + `"${noteResult.body}"`))
    } else {
        console.log(chalk.red('Note not found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}