/*


WHATSAPP BOT created BY MR Kavindu ( K-Black-Star-1 )
WHATSAPP - 94763204765

ℹ️ SPECIAL INFORMATION ℹ️
👾 Welcome to Black-Star-1 Whatsapp Bot settings.js.
Information provided to you.
If you use true or false (ඔබගේ අවශයතාවය මත වෙනස් කරන්න. true/false )
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
If you are using Sex Video Downloader, you need to get permission from Bot Devoper. 

*/
const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ BOT SETTINGS  ⚙️
*/

//👇 if you need seen massage use " true " , මැසේජ් සීන් කරන්න ඔනි නම් true දාන්න ඔනි නැත්තම් false දාන්න
global.READ_MASSAGE = true
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply යවන්න ඔනි නම් true දාන්න 
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයං ක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = true
//👇 Inbox massage block PM block , ඉන්බොක් බ්ලොක් 
global.INBOX_BLOCK = false
//👇 Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders , ස්මූහ ස්බැදි දමන අයව ඉවත් කරයි
global.ANTI_G_LINK = true
//👇 212 Number block ( 212 නම්බර් බ්ලොක් කිරීමට )
global.NUMBER_212_BLOCK = true
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download කැමති නම් වෙනස් කරන්න.
global.SEX_VIDEO_DOWNLOAD = false
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this ) බොට් ඔබේ මිතුරන් හා chat කිරීමට අවශ්‍ය නම් true දමන්න.
global.AUTO_OPEN_AI = true
//👇 Bot On Privet බොට් ප්‍රයිවට් දැමීමට.
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false

/*
       ✨ BOT INFO SETTINGS ✨

*/

// You Bots Owner Number. ( බොට්ගෙ owner ගෙ නම්බරේ )
global.owner = ['94763204765'] 
//👇 Your Caption ( Image Video )
global.cap = 'C⃠R⃠E⃠A⃠T⃠E⃠D⃠ By [ 𝙆-𝘽𝙡𝙖𝙘𝙠-𝙎𝙩𝙖𝙧-1 𝘽𝙊𝙏 𝙫2۝⃟̥̩💍'
//👇 Your Bot Name
global.botnma =  ''C⃠R⃠E⃠A⃠T⃠E⃠D⃠ By [ 𝙆-𝘽𝙡𝙖𝙘𝙠-𝙎𝙩𝙖𝙧-1 𝘽𝙊𝙏 𝙫2۝⃟̥̩' 
//👇 Your name
global.ownernma =  '𝙆𝙖𝙫𝙞𝙣𝙙𝙪 𝙣𝙞𝙢𝙚𝙖𝙝 ' 
//👇 Sticker Author Name
global.packname =  '𝙼𝚁 K-Ⴆʅαƈƙ-ʂƚαɾ-1' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCKED you 🥵 !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '👾|🤖'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝... Downloading Your Song...✓``( චුට්ටක් ඉදපන් බං සිංදුව downoad කරනවා තාම 🤠🥵)`' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝..Uploding Your Song...✓`` (චුට්ටක් ඉදපන් සිංදුව upload කරන ගමන් ඉන්නේ. ♻️🔎 )'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️|👾'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'Z8AQ4rGE8aFzQwF6bzPMZuB2'
//👇 Change Bot Language 
global.LANG = 'SI'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://ibb.co/rQPFN1B`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `hi Bro I'm K-Black-Star-1 Bot👾✓..     I'm Online Now.     Can I help you 🤔 `
//👇 Welcome Mesaage ( වෙල්කම් මැසේජ් එක )
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image (වෙල්කම් image එක)
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message (good Bye මැසේජ් එක)
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image (Good bye Image එක)
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 DISABLE PM Block numbers (ඔයාට කාව හරි බ්ලොක් නොකර ඉන්න ඕනෙ නම් ඒ නම්බර් මේකට ඇඩ් කරන්න.)
global.NO_BLOCK = ["94715166712","94719574492"]
//👇 DISABLE download words( ඩවුන්ලෝඩ් කරගන්න එපා කියලා හිතෙන ඒවා මෙතනට දාන්න.)
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Open ai API Put Withouth "sk-" ( "sk-" අයින් කරල ඉතුරු ටික දාන්න )
global.CHATGPT_API = ''
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['120363147404508506@g.us']
//👇 Your Bot Group Link
global.GROUP_LINK = 'https://chat.whatsapp.com/JPbEGRrIWik2dr6BwqFuSv'

/*

   🍃 OTHER 🍃

*/

global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'

/*

💬 MESSAGE 💬

*/

global.mess = {
success: '✅ Done!',
admin: '*Only admins can use this command ☠️!*',
botAdmin: '*Please admin the bot first👽👻 !*', 
owner: '*Sorry, this command is only for the owner 🤠!*',
group: '*This command can only be used in groups 👎 !*',
private: '*This command can only be used in Inbox ☠️💀 !*',
bot: '*This command can only be used by bot number !*',
wait: '*♲ Please Wait 🔎 ...*',
endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner❌*',
IMG_BLOCK : "This Word is Ban from image downloader📛",
DISABLE_INBOX : "Inbox DISABLE By Bot Owner Please Only Use Groups♻️",
ONLY_SEX_GROUP : "Adult Video Download Only Allowed On This Group \n\n https://chat.whatsapp.com/JYAg2lMpRTF2bgkeFCxsvf",
DISABLE_CMD : "🚫 Commands Are DISABLE by owner",
BAD_DETECT : '',
BLOCK : 'Block for you🤖👾',
UNBLOCK : 'hii 😁',
KICK : 'Removed you 🥵',
ADD : 'Hii welcome 🥰❤️',
LEAVE : Bye 🖐️',
PROMOTE : 'Promoted you ❤️👏',
DEMOTE : 'Demoted for you 🥵👎'

}

//other
global.pemilik = ['94763204765'] //Change  it , ඔයාට කැමති නම් වෙනස් කරන්න.
global.premium = ['94763204765'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'K-star-1' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👾|👽'
global.weem = ' [ 𝙆-𝘽𝙡𝙖𝙘𝙠-𝙎𝙩𝙖𝙧-1 𝘽𝙊𝙏 𝙫2۝⃟̥̩'
global.limitawal = {
     premium: "Infinity", 
     free: 90 

}

//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
    zenz: 'https://zenzapi.xyz', }
global.APIKeys = {
     'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)

})
