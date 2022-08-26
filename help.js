const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
let hitbot = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

exports.menuall = (sender, prefix, pushname, ucapanWaktu, tanggal, jam, isOwner) => {
return `*MAIN MENU*
 • ${prefix}id
 • ${prefix}simi
 • ${prefix}limit
 • ${prefix}rules
 • ${prefix}game
 • ${prefix}listgc
 • ${prefix}listpc
 • ${prefix}owner
 • ${prefix}server
 • ${prefix}buylimit
 • ${prefix}cekuser
 • ${prefix}runtime
 • ${prefix}dashboard

*STORE MENU*
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi

*PROSES/DONE*
 • proses < reply chat >
 • done < reply chat >
 • ${prefix}setproses
 • ${prefix}changeproses
 • ${prefix}delsetproses
 • ${prefix}setdone
 • ${prefix}changedone
 • ${prefix}delsetdone

*RESPON/MESSAGE*
 • ${prefix}delrespon
 • ${prefix}addrespon
 • ${prefix}setrespon
 • ${prefix}listrespon

*SET WELCOME/LEFT*
 • ${prefix}getleft
 • ${prefix}setleft
 • ${prefix}delleft
 • ${prefix}changeleft
 • ${prefix}setwelcome
 • ${prefix}delwelcome
 • ${prefix}getwelcome
 • ${prefix}changewelcome

*CEK USERNAME*
 • ${prefix}nickff
 • ${prefix}nickml
 • ${prefix}nicksupersus

*GROUP SETTING*
 • ${prefix}left on
 • ${prefix}left off
 • ${prefix}antilink on
 • ${prefix}antilink off
 • ${prefix}antiwame on
 • ${prefix}antiwame off
 • ${prefix}welcome on
 • ${prefix}welcome off

*GROUP MENU*
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}linkgc
 • ${prefix}infogc
 • ${prefix}infogrup
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}hidetag
 • ${prefix}tagall
 • ${prefix}open
 • ${prefix}close
 • ${prefix}setppgc
 • ${prefix}setppgc 'panjang'
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}revoke
 • ${prefix}setclose
 • ${prefix}setopen
 • ${prefix}delclose
 • ${prefix}delopen
 • ${prefix}getopen
 • ${prefix}getclose

*OWNERS MENU*
 • ${prefix}bc
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}sendsesi
 • ${prefix}creategc
 • ${prefix}setppbot
 • ${prefix}setthumb
 • ${prefix}broadcast
 • ${prefix}block 628xxx
 • ${prefix}unblock 628xxx
 • ${prefix}setppbot 'panjang'

*RESTART DATABASE*
 • ${prefix}resetall
 • ${prefix}resetlist
 • ${prefix}resethit
 • ${prefix}resetuser
 • ${prefix}resetgame
 • ${prefix}resetbalance

*DOWNLOAD MENU*
 • ${prefix}twitter
 • ${prefix}tiktok
 • ${prefix}tikporn
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}ytshorts
 • ${prefix}facebook

*CONVERT STICKER*
 • ${prefix}sticker <reply image>
 • ${prefix}toimg <reply sticker>
 • ${prefix}toimage <reply sticker>
 • ${prefix}tovid <reply sticker gif>
 • ${prefix}tovideo <reply sticker gif>`
}