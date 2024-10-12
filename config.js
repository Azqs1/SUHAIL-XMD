const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="netovladimir343@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Be Your Own Mr Lonely" 


global.devs = "237698947449" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237698947449";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_11_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1LFxuICAgICAgICA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSeWlYVTY1MGtwSm9CN2pPbFk0K3JseW1kYTJ5eS9iLzhxSkt4SjJNMWlzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaRndFNjZXaVJOLUt6UUJndW1uVC13XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2ZWZjY2NjLTRlZTctNGU2Ny1iZDEwLThjM2Q4NTQzYTk3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyMTAsXG4gICAgICA3NCxcbiAgICAgIDEyOCxcbiAgICAgIDIxOCxcbiAgICAgIDI5LFxuICAgICAgNDYsXG4gICAgICAyNDYsXG4gICAgICAyMDgsXG4gICAgICAyMDYsXG4gICAgICA5NyxcbiAgICAgIDE5NyxcbiAgICAgIDEwNCxcbiAgICAgIDIxNCxcbiAgICAgIDgyLFxuICAgICAgMTQ0LFxuICAgICAgNCxcbiAgICAgIDIxOCxcbiAgICAgIDMzLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTIwLFxuICAgICAgOTIsXG4gICAgICAyMDMsXG4gICAgICAxNjIsXG4gICAgICAyLFxuICAgICAgNDQsXG4gICAgICAxOTQsXG4gICAgICA2NixcbiAgICAgIDIyNCxcbiAgICAgIDkwLFxuICAgICAgMTIyLFxuICAgICAgNjcsXG4gICAgICA2OSxcbiAgICAgIDE3MyxcbiAgICAgIDYzLFxuICAgICAgMTg3LFxuICAgICAgMzAsXG4gICAgICAyMjUsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmZmh2SUtFSW1qcXJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXBqVW5pSVZ1OFJFcUVOZlV0ZTlLZTI4SXRjV0JoZEozSVpNRmtSZ2FuMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVY2tGZ0hNYUFpNERMbWtVN3ovRVNPcFJFbXpJbHVuYnNERnpwWmx3YU5abnpIV3hPclhnZmMwaW44clhCdVA4QVdkNDRQMkN1SE5DMFVwVU9IYm5nZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrY0o1V3VUSC9GVlcvdlBDRkRKZzNRTVVNTDdXeFc0WUlVcm9WSGxMckdRQ2xEcUF2VmpBbGVBcGVqcDR2b3FFeGgzNTV3aDNmTnZWcVMreWRZNVZqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5ODk0NzQ0OTo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ2MzcyMjc2MTMzOTY4OjU1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njk4OTQ3NDQ5OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzQ1ODY5XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "® To Be Your Favourite Human 👽" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Mashle 👽",
  packname: process.env.PACK_NAME || "Castle 🏰",
  botname : process.env.BOT_NAME  || "Suhail~Vlaad~Bot",
  ownername:process.env.OWNER_NAME|| "♠️ 𝑴𝒂𝒔𝒉𝒍𝒆 ~✦ 𝑪𝒂𝒔𝒕𝒍𝒆 ♠️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
