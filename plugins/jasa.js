let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
\`\`\`π¦ [JASA SPAM VIRUS BY RIDZ GANZ]π¦ 

πγ VIRTEX GANAS + VIGRAM γπ 

60x : 1Kπ₯
150Γ : 2kπ₯
300Γ : 3Kπ₯

----------------------------------

πγ SLAYER + PHILIPS GANAS γπ

10x : 500Pπ₯
20x : 1Kπ₯
30Γ : 2Kπ₯ 
100x : 3Kπ₯
200Γ : 4Kπ₯
----------------------------------

πγ VIRLOK + SAUCE GANAS γπ

15x : 1Kπ₯
35x : 2Kπ₯
60x : 3Kπ₯
110x : 4Kπ₯
----------------------------------

πγ VIRKON + WATSON GANAS γπ

20x : 1Kπ₯
60x : 2K π₯
100x : 3Kπ₯
130x : 4Kπ₯

π₯SEMUA VIRUS DIGABUNG 6Kπ₯

HARGA MAHAL, KARENA SANGAT GANAS!!π¦

SUDAH DI UJI WA ORI
RIPPER AUTO MAMPUSπ¦

MINAT? PC AJA, RAGU SKIP!π¦
π³PAYMENT : GOPAYπ³\`\`\`


β *Jual Wa Broadcast + kebal Virtex*
*Fitur*
- Bisa mengubah suara chat audio
- Modify chat(modif chat orng lain untuk mefitnah akowkaow tpi, jangan di lakukan yg unfaedah)
- Message scheduler
- Message auto reply(kayak wa bussines)
- Broadcast message to group(Share link grup ga perlu capek cuma 1 kali klik)
- Bisa spam
*Keuntungan :*
- Bisa Meneruskan Pesan Ke 250 Grup
- Bisa Jadi Kang Share
- Bisa jadi kang spam virtex
-anti delay
! BONUS VIRTEX  + SLAYER  + VIRGAM  !


*βΌοΈOpen Murid Buat Qris ALL PAYMENT No KTP*
π£οΈ:WORK GK BG?
π£οΈ:KALO GK WORK NGAPAIN GW JUAL
Testi?Ada dong

KEUNTUNGAN :
-BISA JADI KANG BUAT QRIS ALL PAYMENT
-TUTORNYA BISA DIJUAL KEMBALI 
-BAWA DANA 5K 

MINAT?PC
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*ketik .penjual jika anda berminat*', 'status@broadcast')
}
handler.help = ['groupbot']
handler.tags = ['hooh']
handler.command = /^(jsv)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
