const yargs = require('yargs');
const noteUtils = require('./utils')

console.log(yargs.argv);
// console.log(process.argv);
// console.log(process.argv[2]);
// console.log(yargs.argv[2]);

//yargs command line commands
yargs.command({
	command: 'create',
	describe: 'C operation in CRUD',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Actual Note',
			demandOption: true,
			type: 'string'
		}	 
	},
	handler: (argv) => noteUtils.createNotes(argv.title, argv.body)
})

yargs.command({
	command: 'delete',
	describe: 'D operation in CRUD', 
	handler: () => console.log('code to perform the delete operation')
})

yargs.parse()
