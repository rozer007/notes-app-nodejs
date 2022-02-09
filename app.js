const getNotes = require('./notes');
const chalk=require('chalk');
const yargs = require('yargs')

// var command =yargs.argv
// console.log(command)

yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder : {
        title :{
            describe : "Note title",
            demand:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demand:true,
            type:'string',
        }
    },
    handler:function(argv)
    {
        console.log('Title : '+ argv.title)
        console.log('Body : '+ argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe:'Remove a note',
    handler:function()
    {
        console.log(chalk.red("Removing a note"))
    }
})
yargs.command({
    command: 'read',
    describe:'Read a note',
    handler:function()
    {
        console.log(chalk.red("Reading a note"))
    }
})
yargs.command({
    command: 'list',
    describe:'List all the notes',
    handler:function()
    {
        console.log(chalk.red('listing the notes'))
    }
})


yargs.parse()

