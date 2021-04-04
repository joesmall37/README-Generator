module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Please enter your name?',
	},
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please share a description of your project.',
	},{
    type: 'input',
    name: 'usage',
    message: 'Please enter the deployed link of your project? (Make sure to include https:// in your response'
	},
	{
		type: 'input',
		name: 'contribution',
		message: 'Share instructions on how others can contribute to your project'
	},
	{
    type: 'input',
    name: 'tests',
    message: 'Please share any tests you ran for your project.'
	},
	{
		type: 'input',
		name: 'github',
		message: 'What is your github URL? (Make sure to include https:// in your response',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email address?',
	},
	{
		type: 'list',
		name: 'license',
		message: 'What license would you like to choose?',
		choices: ["Mit", "Unlicense", "Boost", "Mozilla", "Apache", "eclipse", "gnu"]

	}
];
