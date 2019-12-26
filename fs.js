const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This is how to create a new file with some content in your OS from node.js\n')
// fs.appendFileSync('notes.txt', 'Avoid overwriting existing lines by using the fs.appendFile() methods')

const dataBuffer = fs.readFileSync('book_json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);