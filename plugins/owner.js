let handler = function (m) {
  // this.sendContact(m.chat, '6283829386551', 'Toga', m)
  conn.sendContact(m.chat, '6283829386551', 'Toga', m)
  m.reply('wa.me/6283829386551')
}

handler.command = /^qw$/i

module.exports = handler
