const Discord = require('discord.js');
const bot1 = new Discord.Client();


bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

bot1.on('message', message => {
    if(message.content.startsWith('start manage')) {
            setInterval(()=>{
            message.channel.send(`!spam`)
        },1800000);
        }})


        bot1.login(process.env.FB1);
////////////////////////////////////////////

        const bot2 = new Discord.Client();

        bot2.on('message', message => {
            if(message.content.startsWith('start manage')) {
                    setInterval(()=>{
                    message.channel.send(`!spam`)
                },1800000);
                }})
        
        
                bot2.login(process.env.FB2);

////////////////////////////////////////////////////

                const bot3 = new Discord.Client();


                bot3.on('message', message => {
                    if(message.content.startsWith('start manage')) {
                            setInterval(()=>{
                            message.channel.send(`!spam`)
                        },1800000);
                        }})
                
                
                        bot3.login(process.env.FB3);
//////////////////////////////////////////////////////

