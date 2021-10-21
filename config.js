global.DeveloperMode = 'false' //true Or false
global.owner = ['6285240389682','6285705973694', '6282331033919'] // Put your number here
global.mods = ['6282331033919','6285795431803','6282164659362']  // Want some help?
global.prems = ['6282331033919','6285795431803','6282164659362','6285821918425','628990745458','6283844878048'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',

  hardianto: 'https://hardianto-chan.herokuapp.com',

  jonaz: 'https://jonaz-api-v2.herokuapp.com',

  neoxr: 'https://neoxr-api.herokuapp.com',

  nrtm: 'https://nurutomo.herokuapp.com',

  pencarikode: 'https://pencarikode.xyz',

  xteam: 'https://api.xteam.xyz',

  zahir: 'https://zahirr-web.herokuapp.com',

  zekais: 'http://zekais-api.herokuapp.com',

  zeks: 'https://api.zeks.xyz',

}

global.APIKeys = { // APIKey nya disini

  // 'https://website': 'apikey'

  'https://bx-hunter.herokuapp.com': 'Ikyy69',

  'https://hardianto-chan.herokuapp.com': 'hardianto',

  'https://neoxr-api.herokuapp.com': 'yntkts',

  'https://pencarikode.xyz': 'pais',

  'https://api.xteam.xyz': 'MIMINETBOT',

  'https://zahirr-web.herokuapp.com': 'zahirgans',

  'https://api.zeks.xyz': 'apivinz',

}

// Sticker WM
global.packname = 'ANDY BOTZ'
global.author ='+6282164659362'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
