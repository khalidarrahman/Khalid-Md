const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "6285655548594"
global.ownername = "Khalid 😎"
global.ytname = "YouTube : Tidak Tersedia"
global.socialm = "GitHub : Tidak Tersedia"
global.location = "Indonesian"

global.ownername = 'Khalid 😎' 
global.botname = 'Khalid-Md' 

//sticker details
global.stickername = 'Khalid 😎'
global.packname = 'Khalid-Md'
global.author = 'Khalid-Md'
//console view/theme
global.themeemoji = '😎'
global.wm = "Khalid-Md inc."

//theme link
global.link = 'https://chat.whatsapp.com/'

//custom prefix
global.prefa = ['']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
