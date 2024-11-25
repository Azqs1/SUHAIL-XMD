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
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "237698947449" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237698947449,237651506147";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_30_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMixcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI5LFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDM5LFxuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1JSTFlVkpzeGxOUjIyNHRpNnB4SmJYdE5Md050V09ZdkFTb21TeWZKckE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1kSzcydWV5UWVtWS1vaGM0aW1WZHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWRiN2ZkODktYmIzYi00MjI5LWFiZTEtYTE1MTFlODA4ZTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTAxLFxuICAgICAgMjgsXG4gICAgICAxMzIsXG4gICAgICAyNDMsXG4gICAgICA2NyxcbiAgICAgIDg2LFxuICAgICAgMTI3LFxuICAgICAgMTQ3LFxuICAgICAgMTcsXG4gICAgICAxOTEsXG4gICAgICA4MSxcbiAgICAgIDEyMSxcbiAgICAgIDE0MSxcbiAgICAgIDE5OCxcbiAgICAgIDI0MixcbiAgICAgIDExNyxcbiAgICAgIDE2OSxcbiAgICAgIDQyLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyMzcsXG4gICAgICAxMzksXG4gICAgICAxOTgsXG4gICAgICAxNzcsXG4gICAgICAxMixcbiAgICAgIDE1NyxcbiAgICAgIDE1MyxcbiAgICAgIDE5MSxcbiAgICAgIDIxMCxcbiAgICAgIDE0MSxcbiAgICAgIDU3LFxuICAgICAgMjA4LFxuICAgICAgMTE4LFxuICAgICAgMTk5LFxuICAgICAgMTA1LFxuICAgICAgNDUsXG4gICAgICA4NSxcbiAgICAgIDkxLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZmZodklLRUtPLzlMa0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlwalVuaUlWdThSRXFFTmZVdGU5S2UyOEl0Y1dCaGRKM0laTUZrUmdhbjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidzgrMkdvMnV1bHd6bmVGTVZRRjNDZTFLSWEwZFk1T3ZLU2YxWnpNN0FWNW1UNzJoNEpTaEVTeW1ibVJySEczL1dlbEV0eFAySzMxdGl6Qm1BNEttaVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid012bGVocVhGaXhUYkhrenVqVW1oTE1jaGxJYkJOUHFqR1JjblhORXRQVXE1QzNzM05NTnJZMzQ2RGVMUFhtTXVLZlh2ek1uaWdkZm9FYnpKY1hWQVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTg5NDc0NDk6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NjM3MjI3NjEzMzk2ODo1N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5ODk0NzQ0OTo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjA1OTA0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9DclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0NxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVzhST1l2bEx4bUdnSDdyT1ZPSG9BTDI5UEczb3g3SVNCVWZiRndsUXNRcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTIzNTQwMzc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg3NDU4ODg3NTZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPQ3IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwTVdtMmVHbTJnNWVZSzc3bFFJYlRwZ004dDduWjIwSTFtbXVzeW5mb1NZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MjM1NDAzNzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTM0NDY1MjE3OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9DdC5qc29uIjogIntcImtleURhdGFcIjpcInlSVTZpNmUrR3ZlN0hkNXJZd0NWQXRTNnhhaWo0VUFJSlg3bWhtVmlYVjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkyMzU0MDM3NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzIsMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIwNTkwMjUxNjdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPQ3UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZUk81bmcwcnAvNGh3aFo1TnNYaC8zSTFBTjZScnBENVgvbTFMNk5reHlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5MjM1NDAzNzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjA1OTAyNjk5NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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
