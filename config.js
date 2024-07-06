const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_17_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVQnZOenNkY3VIUW5IR29mQXRBdUxCN2RRZW9wNjFsWVorYWhPNXdSYVpFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjY4NzI5MDE5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0N0ExM0IxNUZFNjRBRjMzRDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjgyNjYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlQ4bmFsT0tuUjJxQXpEMWl3c2diSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGMxZDA0ODEtYWExYi00NDY1LWJjZDgtOGE4ODgwNWFjYWRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgNixcbiAgICAgIDE0MSxcbiAgICAgIDE2NSxcbiAgICAgIDkwLFxuICAgICAgMTc5LFxuICAgICAgMjU1LFxuICAgICAgMTYwLFxuICAgICAgMTU1LFxuICAgICAgMTY4LFxuICAgICAgMTQ0LFxuICAgICAgMjM5LFxuICAgICAgMjM3LFxuICAgICAgMixcbiAgICAgIDQ5LFxuICAgICAgMTcxLFxuICAgICAgODcsXG4gICAgICAxNDYsXG4gICAgICAxMyxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDE1MyxcbiAgICAgIDIwNCxcbiAgICAgIDE1OCxcbiAgICAgIDIzNixcbiAgICAgIDQ5LFxuICAgICAgMjIwLFxuICAgICAgMTA4LFxuICAgICAgMTI1LFxuICAgICAgMTIwLFxuICAgICAgMTUyLFxuICAgICAgMjI4LFxuICAgICAgMTA5LFxuICAgICAgMTAwLFxuICAgICAgNTAsXG4gICAgICAxLFxuICAgICAgMjQ2LFxuICAgICAgMTc2LFxuICAgICAgNTUsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjlSQzRCVkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY4NzI5MDE5Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSG16XCIsXG4gICAgXCJsaWRcIjogXCIyOTk0OTI0MzIwNzgwNjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BmY3Q4QVBFSjdjcGJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZUdRYmN6d2tWNlgwbGRQV3JiSmxBSk5IejNPT0psbHkwelkwTmx0bkIxWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTSVd1OXJpbEp0Zzl5RFZTUkl5NWFOUmxOdDZCamdqeEJwYmY1WVZLajcwRUdtZmhrU3BpYUtWVFM1ODNJckFFclVGRUdHZEdvWWduclg5UHBJZk1Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMSVUyZUFEaEpMOFB6SVpHZ1NQUTRyV3MwZWlnMGhCUG9tVWsveVgxUkFTMWRzUjBpQ2JoRE1RUk50amduQUQ3YW8rZlVuUWZxcFNaaiszQUkrdHdodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI2ODcyOTAxOTI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjgyNjU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFZGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQVkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwbEV6NmRTYWJVWG5GL28rR2NIS1ZvdGhMMkF6WCt1bmpWYkFBOVE5YVA0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNjE2NjI1ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI3MDEyMzQxM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_d9e3544fc8312a0eade0f671c6ca86c0793c05d11c6620c5";
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
