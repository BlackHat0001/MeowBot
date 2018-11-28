//variables
var discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', (message, meow) => {

    //variables
    var sender = message.author;
    var msg = message.content.toUpperCase;
    var prefix = '!';
    var meow = 'MEEEEEEOOOOOOOOOWWWWWWWWW';

    if msg.includes('INFO' && prefix === '!') {
        message.channel.send({
            embed: {
                title: ('Info'),
                description: (
                    'The most boring one. Yawwn /n',
                    'Im a cat meow. See told you'),
                color: 0xfdf5e2,
                return;        
            }
        })


        if msg.includes('MEOW' && prefix='!') {
            message.channel.send('Meow')
            return;
        };

        if msg.includes('SUGGESTION' && prefix='!') {
            message.channel.send('M*ow off! danie cant be bothered to code it')
        };

        if msg.includes('DRUGS' && prefix='!') {
            meow.repeat(15)
        }
    })




bot.on('ready' => {
    //console functions
    console.log('Bot Started')

    bot.channels.get('REALLY NEED TO PUT THE CHANNEL ID IN HERE').send({
        embed: {
            title: ('Meow Wakeup'),
            description: (
                'MEEEEEEEEOOOOOOWWW. Ah that was a nice sleep. My name is meow bot. What can i do for you? \n',
                'Here is some of the stuff i can do (but remeber, i need that meow shit man): \n',
                '!info: I can give you some info (but who really wants that anyway), \n',
                '!meow: I can speak cat to you meow,',
                '!suggestionI can take suggestions on what you want me to do in the future (but that requires danie to do more coding), \n',
                '!drugs: and i can do the super meow... /n',
                'Made by danie'),
            color: 0xfdf5e2,
            return;
        }
    });
       
});

bot.login('REALLY NEED TO PUT BOT ID IN HERE!')