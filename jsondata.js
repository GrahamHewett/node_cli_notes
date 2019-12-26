const fs = require('fs');

const book = {
	title: 'Title',
	author: 'Someone'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);

fs.writeFileSync('book_json.json', bookJSON);