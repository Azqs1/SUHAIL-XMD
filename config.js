const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || "© BeYourOwn" 


global.devs = "237698947449" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "237651506147";
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_49_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk3LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWK3dWY0VMc1MrcjFuS3BZSXN2WW0yelhXVTFoc3BxNldIN0cvaWR4Y25NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1UGlWR2ZYSFFBbUVVcHJOVmdNV0NRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0MDNjYWI5LTFmOGItNDUwOS04OGE4LWY5MDRjMDkxOTQ4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDEsXG4gICAgICAxODQsXG4gICAgICAyMjEsXG4gICAgICAxNzMsXG4gICAgICAxODMsXG4gICAgICAxMzUsXG4gICAgICA3MCxcbiAgICAgIDIzMixcbiAgICAgIDEwMCxcbiAgICAgIDM3LFxuICAgICAgOTksXG4gICAgICAxODUsXG4gICAgICA0MSxcbiAgICAgIDMyLFxuICAgICAgMTYyLFxuICAgICAgMTI1LFxuICAgICAgMjA2LFxuICAgICAgMTc0LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAxNzksXG4gICAgICAyOCxcbiAgICAgIDIzNSxcbiAgICAgIDE3MCxcbiAgICAgIDEyMyxcbiAgICAgIDk4LFxuICAgICAgMjE1LFxuICAgICAgNjMsXG4gICAgICAxMjQsXG4gICAgICA1OSxcbiAgICAgIDI5LFxuICAgICAgMTAwLFxuICAgICAgMTAsXG4gICAgICAyMjYsXG4gICAgICA5MCxcbiAgICAgIDE1NSxcbiAgICAgIDE4NixcbiAgICAgIDgsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLNncwbzBERUxxbCtyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlwalVuaUlWdThSRXFFTmZVdGU5S2UyOEl0Y1dCaGRKM0laTUZrUmdhbjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZlJaLzFEQ1F5TzNYR3piVXcxQTFEMHBCTzlQWTlSTGFjLzh1YyttcWVTNnlJUzhMK2JSdklCaHZQMWRUM3lnbDF0cnZqRmxkY1ZKTmQrY20zbmZ5Z1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWJhQjRFZHU2Vkt5SFpqL0xxaUpkNlRoM3pyN292WjkzYkFNd2V1VXlmUFdvbmdERFU4ZDhFU3VFQW13S1NzT0tLS2tWbFRzTlY1R042a0psLzJraEE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTg5NDc0NDk6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NjM3MjI3NjEzMzk2ODo1MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5ODk0NzQ0OTo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk1OTc0MlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "◤✞ 𝕳𝖆𝖕𝖕𝖎𝖓𝖊𝖘𝖘 𝖎𝖘 𝖍𝖊𝖗𝖊 ✞◥" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Mashle 👽",
  packname: process.env.PACK_NAME || "Castle 🏰",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
