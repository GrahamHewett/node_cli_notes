console.log('utility functions');
const fs = require('fs');
const name = 'Gray';

const readNotes = () => {
	const dataBuffer = fs.readFileSync('notes.txt');
	const dataJSON = dataBuffer.toString();
	return JSON.parse(dataJSON) || [];
}

const createNotes = (title, body) => {
	const notes = readNotes();
	const duplicateNotes = notes.filter(note => note.title === title)
	duplicateNotes.length > 0 ? 'Note title already exists' :
		notes.push({title, body})
		saveNotes(notes)
		console.log('new note added')
};

const saveNotes = (notes) => fs.writeFileSync('notes.txt', notes)

const deleteNotes = (rmNote) => 'Your delted note was...';

module.exports = {
	name,
	createNotes,
	readNotes,
	deleteNotes
}