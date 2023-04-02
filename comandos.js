/*            // leia antes //
 Meu canal: https://youtube.com/@VenomModss
 
 Meu canal secundário: https://youtube.com/@VenomMods2
 
 Meu Whatsapp: https://wa.me/559784388524
 
 Meu grupo1: https://chat.whatsapp.com/F0htRhluNlX8DZyBecONv0
 
 Meu grupo2: https://chat.whatsapp.com/Eig4z1Oar9C9Yl58ro7T3n
 
 Meu github: https://github.com/Venom-Ytb
 
 se for resposta minha base deixe os créditos 
 e se for fazer seu bot pfv deixa pelo menos isso 
 tudo que está aki foi feito pra judar vocês 
 É mereço pelos menos os créditos...
 Qualquer base parecida ou semelhante a essa é kibado. */

require('../configurar')

const { BufferJSON, WA_DEFAULT_EPHEMERAL, 

generateWAMessageFromContent, 

proto, generateWAMessageContent, 

generateWAMessage, 

prepareWAMessageMedia, 

areJidsSameUser, 

getContentType 

} = require("../servidor/@Venom/api")

const fs = require('fs')

const util = require('util')

const chalk = require('chalk')

const axios = require('axios')

const path = require('path')

const { color, hora, data, log,} = require('../dados/lib/funcoes')

const os = require('os')

const crypto = require('crypto')

const hx = require('hxz-api')

const mel = require('kitsune-api')

const moment = require('moment-timezone')

const { JSDOM } = require('jsdom')

const google = require('google-it')

const ntilink = JSON.parse(fs.readFileSync("./dados/lib/antilink.json"))

const mathjs = require('mathjs')

const speed = require('performance-now')

const { performance } = require('perf_hooks')

const { Primbon } = require('scrape-primbon')

const { exec, spawn, execSync } = require("child_process")

const { desvenom } = require('../dados/travas/desvenom') 

const primbon = new Primbon()

const { getGroupAdmins } = require('../dados/lib/funcoes')

const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('../dados/lib/myfunc')
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
module.exports = venom = async (venom, msg, chatUpdate, store) => {
try {

var venomlog = '\n'

const type = Object.keys(msg.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(msg.message)[2] : (Object.keys(msg.message)[0] == 'messageContextInfo') ? Object.keys(msg.message)[1] : Object.keys(msg.message)[0]

var body = (msg.mtype === 'conversation') ? msg.message.conversation : (msg.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'documentMessage') ? msg.message.documentMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''

var budy = (typeof msg.text == 'string' ? msg.text : '')

global.prefixo

const content = JSON.stringify(msg.message)

const isCmd = body.startsWith(prefixo)

const comando = body.replace(prefixo, '').trim().split(/ +/).shift().toLowerCase()

const args = body.trim().split(/ +/).slice(1)

const nome = msg.pushName || "Nao defindo"

const botNumber = await venom.decodeJid(venom.user.id)

const isCreator = [botNumber, ...global.dono].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(msg.sender)

const itsMe = msg.sender == botNumber ? true : false

const text = q = args.join(" ")

const quoted = msg.quoted ? msg.quoted : msg

const mime = (quoted.msg || quoted).mimetype || ''

const isMedia = /image|video|sticker|audio/.test(mime)

const from = mek.key.remoteJid

const isGrupo = msg.key.remoteJid.endsWith("@g.us")

selectedButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''

const argsButton = selectedButton.trim().split(/ +/)
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
const groupMetadata = isGrupo ? await venom.groupMetadata(from) : ""

const groupName = isGrupo ? groupMetadata.subject : ""

const groupDesc = isGrupo ? groupMetadata.desc : ""

const groupMembers = isGrupo ? groupMetadata.participants : ""

const groupAdmins = isGrupo ? getGroupAdmins(groupMembers) : ""

const participants = isGrupo ? groupMetadata.participants : ''

const isBotAdmins = isGrupo ? groupAdmins.includes(botNumber) : false

const isBotGrupoAdmins = groupAdmins.includes(botNumber) || false

const isGrupoAdmins = groupAdmins.includes(msg.sender) || false 

const AntiLink = isGrupo ? ntilink.includes(from) : false 

const consolevenom = venomlog

//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
const sender = isGrupo ? (msg.key.participant ? msg.key.participant  : msg.participant)  : msg.key.remoteJid

const time = moment(Date.now()).tz('America/Campo_Grande').locale('id').format('DD/MM HH:mm:ss')

const wita = moment(Date.now()).tz('America/Campo_Grande').locale('id').format('HH:mm:ss')

const wit = moment(Date.now()).tz('America/Campo_Grande').locale('id').format('DD/MM/YY')

const salam = moment(Date.now()).tz('America/Campo_Grande').locale('id').format('a')

const qtod = msg.quoted? "true":"false"

const argis = body.trim().split(/ +/).slice(1)
// data
moment.tz.setDefault("America/Campo_Grande").locale("id");

const enviar = (texto) => {
venom.sendMessage(from, { text: texto }, {quoted : msg})
} 

if (msg.message) {
 }
 //=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
// console de pv 
if (isGrupo && isCmd) console.log(
`${consolevenom}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙢 𝙜𝙧𝙪𝙥𝙤', 'white'),
`${consolevenom}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤:', 'white'), color(`${comando}`, 'red'),
`${consolevenom}`,color('𝙉𝙪𝙢𝙚𝙧𝙤:', 'white'), color(`${sender.split("@")[0]}`, 'red'),
`${consolevenom}`,color('𝙂𝙧𝙪𝙥𝙤:', 'white'), color(`${groupName}`, 'red'),
`${consolevenom}`,color('𝙉𝙞𝙘𝙠:', 'white'), color(`${nome}`, 'red'),
`${consolevenom}`,color('Keyabeta v1', 'white')
)
//console de grupo
if (isGrupo && !isCmd) console.log(
`${consolevenom}`,color('𝙈𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙚𝙢 𝙜𝙧𝙪𝙥𝙤', 'white'),
`${consolevenom}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤:', 'white'), color('Não', 'red'),
`${consolevenom}`,color('𝙉𝙪𝙢𝙚𝙧𝙤:', 'white'), color(`${sender.split("@")[0]}`, 'red'),
`${consolevenom}`,color('𝙂𝙧𝙪𝙥𝙤:', 'white'), color(`${groupName}`, 'red'),
`${consolevenom}`,color('𝙉𝙞𝙘𝙠:', 'white'), color(`${nome}`, 'red'),
`${consolevenom}`,color('Keyabeta v1', 'white')
)
//console de comando no pv
if (!isGrupo && isCmd) console.log(
`${consolevenom}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙣𝙤 𝙥𝙫', 'white'),
`${consolevenom}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤:', 'white'), color(comando, 'red'),
`${consolevenom}`,color('𝙉𝙪𝙢𝙚𝙧𝙤:', 'white'), color(`${sender.split("@")[0]}`, 'red'),
`${consolevenom}`,color('𝙂𝙧𝙪𝙥𝙤:', 'white'), color('Não', 'red'),
`${consolevenom}`,color('𝙉𝙞𝙘𝙠:', 'white'), color(`${nome}`, 'red'),
`${consolevenom}`,color('Keyabeta v1', 'white'))

//console de mensagem no pv
if (!isGrupo && !isCmd) console.log(
`${consolevenom}`,color('𝙈𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙣𝙤 𝙥𝙫', 'white'),
`${consolevenom}`,color('𝘾𝙤𝙢𝙖𝙣𝙙𝙤:', 'white'), color('Não', 'red'),
`${consolevenom}`,color('𝙉𝙪𝙢𝙚𝙧𝙤:', 'white'), color(`${sender.split("@")[0]}`, 'red'),
`${consolevenom}`,color('𝙂𝙧𝙪𝙥𝙤:', 'white'), color('Não', 'red'),
`${consolevenom}`,color('𝙉𝙞𝙘𝙠:', 'white'), color(`${nome}`, 'red'),
`${consolevenom}`,color('Keyabeta v1', 'white')
)

 
 // AntiLink
if (AntiLink) {
linkgce = await venom.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
enviar(`\`\`\`「 Link Detectado 」\`\`\`\n\nVocê não será banido porque o que você envia é um link deste grupo`)
} else if (isUrl(msg.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin enviou um link, os administrador é livre para postar tipo qualquer link`
if (isGrupoAdmins) return enviar(bvl)
if (msg.key.fromMe) return enviar(bvl)
if (isCreator) return enviar(bvl)
kice = msg.sender
await venom.groupParticipantsUpdate(from, [kice], 'remove').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
venom.sendMessage(from, {text:`\`\`\`「 Link Detectado 」\`\`\`\n\n@${kice.split("@")[0]} Será bainido por enviar link neste grupo`, contextInfo:{mentionedJid:[kice]}}, {quoted:msg})
} else {
}
}
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
switch(comando) {
case 'menu' : {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
const menu = `
╔━⊱ *「 keya v1 」* ━✕
┃✕ *Nick: ${nome}*
┃✕ *Número: wa.me/${sender.split('@')[0]}*
┃✕ *Status: ${isCreator? "Dono 👑️":"Usuário ⚔️"}*
┗━━━━━━━━━━━━━━✕
┊
╔━━━⊱ *「 𝘽𝙤𝙪𝙩 」*  ━━━✕
┊Olá seja bem vindo ao menu
┊este bot é apenas um teste
┊deve ter bug pra caralho 
┊e use com sabedoria 
┊não me responsabilizo pelos       
┊erros ou pelos benefícios que  
┊você fez usando o bot
┊não irei da suporte ou ajudas...
┊use de forma publica e sensível 
┊qualquer venda deste bot 
┊entre em contato comigo...
┗━━━━━━━━━━━━━━✕
┊
╔━━⊱ *「 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 」*━━✕
┃${prefixo}texto「 enviar texto 」
┃${prefixo}doc「 enviar documentos 」
┃${prefixo}foto「 enviar fotos 」
┃${prefixo}fototexto「 fotos / legenda 」
┃${prefixo}trava「 enviar trava 」
┃${prefixo}video「 enviar video 」
┃${prefixo}videotexto「 video / legenda 」
┃${prefixo}audio「 enviar audio 」
┃${prefixo}audiovoz「 nota de voz 」
┃${prefixo}loc「 enviar localização 」
┃${prefixo}botao「 enviar botões 」
┃${prefixo}lista「 enviar listas 」
┗━━━━━━━━━━━━━━✕
┊
╔━━⊱ *「 𝙀𝙭𝙩𝙧𝙖 」*━━✕
┃${prefixo}estourar「 marque o audio 」
┃${prefixo}apagar「 marque a msg 」
┃${prefixo}clonarnick「 clonar nick 」
┃${prefixo}figu「 fazer figurinha 」
┃${prefixo}stickefoto「 figu em foto 」
┃${prefixo}clear「 limpar chat 」
┃${prefixo}reagir「 reação de emoji 」
┃${prefixo}blockspam「 total 」
┃${prefixo}bombtext「 texto 」
┃${prefixo}fotobot「 imagem 」
┃${prefixo}bloquear「 Número 」
┃${prefixo}desbloquear「 Número 」
┗━━━━━━━━━━━✕
┊
╔━━⊱ *「 𝙂𝙧𝙪𝙥𝙤𝙨 」*━━✕
┃${prefixo}clonarperfil「 clonar foto 」
┃${prefixo}add「 add membro 」
┃${prefixo}remover「 remover/membro 」
┃${prefixo}antilink「 on/off 」
┃${prefixo}promover「 promover/adm 」
┃${prefixo}rebaixar「 tira adm 」
┃${prefixo}linkgrupo「 link 」
┃${prefixo}entrar「 link 」
┃${prefixo}sair「 sair do grupo 」
┃${prefixo}revogarlink「 revogar link  」
┃${prefixo}setnomegp「 mudar 」
┃${prefixo}descrição「 mudar 」
┃${prefixo}fotogrupo「 mudar 」
┃${prefixo}marcar「 todos 」
┃${prefixo}hidetag「 texto 」
┃${prefixo}grupo「 f/a 」
┗━━━━━━━━━━━✕
┊
╔━⊱ *「 𝘾𝙧𝙚𝙙𝙞𝙩𝙤𝙨 」*━━✕
┃ keya -dev
┗━━━━━━━━━━━━✕`
			const buttons = [
				{ buttonId: 'mycanal', buttonText: { displayText: 'off por enquanto' }, type: 1 },
				{ buttonId: 'dono', buttonText: { displayText: '556798101720' }, type: 1 },
		{ buttonId: 'mygrupo', buttonText: { displayText: 'off por enquanto' }, type: 1 }
			]

			const buttonMessage = {
				image: fs.readFileSync("./dados/imagem/Venom.jpg"),
				caption: menu,
				footer: 'KeyaBeta v1',
				buttons: buttons,
				headerType: 4
			}

		 venom.sendMessage(from, buttonMessage)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'clear': // 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
venom.sendMessage(from, {text:' Limpo 😎🤙\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlimpo'})
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'blockspam': // 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
for (let i = 0; i < args[0]; i++) {  
const block = await venom.updateBlockStatus(sender, 'block') 
const unblock= await venom.updateBlockStatus(sender, 'unblock')
}  
break                      
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case "revogarlink":// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isGrupo) return enviar(resposta.grupo)
if (!groupAdmins) return enviar(resposta.adm)
if (!isBotGrupoAdmins) return enviar(resposta.botadm)
try {
await venom.groupRevokeInvite(from)
enviar("  Link de convite resetado com sucesso ✓ ")
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'texto': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from, {text: 'Seu texto aki'},
{quoted: msg}
)}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'loc': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from, {location: { degreesLatitude: -4.1105505, 
degreesLongitude: -4.1105505
}},
{quoted: msg}
)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'doc': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venomdoc = fs.readFileSync('./dados/documento/venom.dex')
venom.sendMessage(
from, 
{document: venomdoc, 
mimetype: 'application/pdf', 
fileName: 'Nome do documento aki' }, 
{quoted: msg}
)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'foto': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from, 
{image: fs.readFileSync('./dados/imagem/venom.jpg')
},
{quoted: msg}
)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'fototexto': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from,
{image: fs.readFileSync('./dados/imagem/venom.jpg'), 
caption: 'Seu texto aki'
},
{quoted: msg}
)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'video' : {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from, 
{video: fs.readFileSync('./dados/video/venom.mp4')
},
{quoted : msg}
)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'videotexto' : {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from, 
{video: fs.readFileSync('./dados/video/venom.mp4'), 
caption: 'Seu texto aki'
}, 
{quoted: msg}
)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'audio' : {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from, {
audio: fs.readFileSync('./dados/audio/venom.mp3'), 
mimetype: 'audio/mpeg', 
}, 
{quoted: msg}
)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'audiovoz' : {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from, {audio: fs.readFileSync('./dados/audio/venom.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: msg}
)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'figurinha': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.sendMessage(
from, {sticker: fs.readFileSync('./dados/figurinha/venom.webp')
},
{quoted: msg})
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'bombtext':// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
if (args.length < 1) return enviar('exemplo .bombtext 5|keyalindo')
txt = args[0];
texto1 = txt.split("|")[0];
texto2 = txt.split("|")[1];
for (let i = 0; i < texto1; i++) {  
venom.sendMessage(from, 
{ text: `${texto2}`}, 
{quoted:msg})
}          
break 
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'botao' :
case 'botão' : {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
const buttons = [
				{ buttonId: 'id1', buttonText: { displayText: 'Botão 1' }, type: 1 },
				{ buttonId: 'id2', buttonText: { displayText: 'Botão 2' }, type: 1 },
				{ buttonId: 'id3', buttonText: { displayText: 'Botão 3' }, type: 1 }
			]

			const buttonMessage = {
				text: "Texto do Botão",
				footer: 'Rodape do botão',
				buttons: buttons,
				headerType: 1
			}
venom.sendMessage(from, buttonMessage)
 }
 break
 //=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'lista': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
const sections = [
				{
					title: "Sessão 1",
					rows: [
						{ title: 'Opção 1', rowId: 'id2'},
						{ title: "Opção 2", rowId: "id2", description: "Descrição " }
					]
				},
				{
					title: "Sessão 2",
					rows: [
						{ title: "Opção 3", rowId: "id3" },
						{ title: "Opção 4", rowId: "id4", description: "Descrição" }
					]
				},
			]

			const listMessage = {
				text: "Texto da lista",
				footer: "Rodape da lista",
				title: "Título da lista",
				buttonText: "Botão da lista",
				sections
			}
venom.sendMessage(from, listMessage)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'repetir': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if(!q) return enviar(`Digite o texto pro bot repetir Exemplo: ${prefixo + comando} Quem é keya?`)
venom.sendMessage(from,
{text: q},
{quoted: msg})
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'reagir': // 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if(!q) return enviar(`Digite o emoji pro bot reagir exemplo: ${prefixo + comando} 😍`)
const reactionMessage = {
				react: {
					text: q,
					key : msg.key
				}
			}

			venom.sendMessage(from, reactionMessage)//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'entra': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
if (!text) return enviar( 'Cade k link!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return enviar( 'Link Invalido ou não é um grupo de Whatsapp!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await venom.groupAcceptInvite(result)
enviar('Jaja estou no seu grupo')
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'sair': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
enviar('Meu dono keya mandou eu sair.... bye bye😫🖐')
await venom.groupLeave(msg.chat).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'ban':
case 'remover': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isGrupo) return enviar(resposta.dono)
if (!isCreator) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myadm)
if (!isGrupoAdmins) return enviar(resposta.adm)
let users = msg.mentionedJid[0] ? msg.mentionedJid[0]  : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.groupParticipantsUpdate(from, [users], 'remove') 
enviar('Usuário removido com sucesso!')
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'add': 
case 'adicionar': // 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
case 'adiciona': 
{
if (!isCreator) return enviar(resposta.dono)
if (!isCreator) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myadm)
if (!isGrupoAdmins) return enviar(resposta.adm)
let users = msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.groupParticipantsUpdate(from, [users], 'add')
enviar('Usuário adiconado com sucesso caso deu erro tente novamente..')
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'promover': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
if (!isCreator) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myadm)
if (!isGrupoAdmins) return enviar(resposta.adm)
let users = msg.mentionedJid[0] ? msg.mentionedJid[0]  : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.groupParticipantsUpdate(from, [users], 'promote')
enviar('Usuário promovido como adm do grupo!')
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'rebaixar': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
if (!isCreator) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myadm)
if (!isGrupoAdmins) return enviar(resposta.adm)
let users = msg.mentionedJid[0] ? msg.mentionedJid[0]  : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.groupParticipantsUpdate(from, [users], 'demote')
enviar('Usuário rebaixado do cargo de adm com sucesso!')
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'block': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
let users = msg.mentionedJid[0] ? msg.mentionedJid[0]  : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.updateBlockStatus(users, 'block')
enviar('Usuário bloqueado com sucesso!')
}
break
//=================================================//
case 'desbloquear': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
let users = msg.mentionedJid[0] ? msg.mentionedJid[0]  : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await venom.updateBlockStatus(users, 'unblock')
enviar('Usuário desbloqueado com sucesso!')
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'setnomegp': case 'nomegp': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myadm)
if (!isGrupoAdmins) return enviar(resposta.adm)
if (!text) return enviar('Cadê o nome?')
await venom.groupUpdateSubject(from, text)
enviar('*Nome do grupo alterado com sucesso*')
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'descricao': case 'descrição': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myadm)
if (!isGrupoAdmins) return enviar(resposta.adm)
if (!text) return enviar( 'Cadê a descrição?')
await venom.groupUpdateDescription(from, text)
enviar('*Descrição do grupo alterada com sucesso*')
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'fotobot': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
enviar(resposta.espere)
if (!quoted) return enviar(`Envie/Responda uma Imagem com a legenda ${prefixo + comando}`)
if (!/image/.test(mime)) return enviar(`Envie/Responda uma Imagem com a legenda ${prefixo + comando}`)
if (/webp/.test(mime)) return enviar(`Envie/Responda uma Imagem com a legenda ${prefixo + comando}`)
var media = await venom.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./dados/lib/myfunc")
var { img } = await generateProfilePicture(media)
await venom.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await venom.updateProfilePicture(botNumber, { url: media }) }
enviar(resposta.sucesso)
} catch { enviar('Falha ao alterar o perfil do bot') }
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'setppgroup': case 'fotogrupo': case 'setppgc': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isGrupo) return enviar(resposta.grupo)
if (!isGrupoAdmins) return enviar(resposta.adm)
enviar(resposta.espere)
if (!quoted) return enviar(`Envie/Responda uma Imagem com a legenda ${prefixo + comando}`)
if (!/image/.test(mime)) return enviar(`Envie/Responda uma Imagem com a legenda ${prefixo + comando}`)
if (/webp/.test(mime)) return enviar(`Envie/Responda uma Imagem com a legenda ${prefixo + comando}`)
let media = await venom.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./dados/lib/myfunc")
var { img } = await generateProfilePicture(media)
await venom.query({ tag: 'iq',attrs: { to : msg.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await venom.updateProfilePicture(from, { url: media }) }
enviar(resposta.sucesso)
} catch { enviar('Falha ao alterar o perfil do grupo') }
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'marcar': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isGrupo) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myadm)
if (!isGrupoAdmins) return enviar(resposta.adm)
let teks = `══✪〘 *👥 * 〙✪══
  ${q ? q : ''}\n\n`
for (let mem of participants) {
teks += ` @${mem.id.split('@')[0]}\n`
}
venom.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: msg })
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'hidetag': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isGrupo) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myacdm)
if (!isGrupoAdmins) return enviar(resposta.adm)
venom.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: msg })
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'linkgrupo': case 'linkgc': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isGrupo) return enviar(resposta.grupo)
if (!isBotAdmins) return  enviar(resposta.myadm)
let response = await venom.groupInviteCode(from)
venom.sendMessage(from, {text: `https://chat.whatsapp.com/${response}\n\nLinko do grupo : ${groupMetadata.subject}`}, {quoted: msg, detectLink: true })
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'apagar': case 'del': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!msg.quoted) return false
let { chat, fromMe, id, isBaileys } = msg.quoted
if (!isBaileys) return enviar('Infelizmente so posso apagar mensagem minhas!')
venom.sendMessage(from, { delete: { remoteJid : msg.chat, fromMe: true, id : msg.quoted.id, participant : msg.quoted.sender } })
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'sticker': case 's': case 'stickergif': case 'figu': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
enviar('Aguarde fazendo sua figurinha..🧸')
if (!quoted) return enviar(`Envie/marque videos/,fotos com o comando ${prefixo + comando}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await venom.enviarImageAsSticker(from, media,msg, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return enviar('Vídeos no máximo 10 segundos!')
let media = await quoted.download()
let encmedia = await venom.enviarVideoAsSticker(from, media,msg, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
return enviar(`Envie/marque videos/,fotos com o comando ${prefixo + comando}\nDuracao de Video 1-9 segundos`)
}
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'fotosticker': case 'stickerfoto': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!quoted) return enviar('reponda a figurinha')
if (!/webp/.test(mime)) return enviar(`Marque uma figurinha com *${prefixo + comando}*`)
let media = await venom.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
venom.sendMessage(from, { image: buffer }, { quoted: msg })
fs.unlinkSync(ran)
})
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'estourar': // 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
try {
let set
if (/earrape/.test('earrape')) set = '-af volume=30'
if (/audio/.test(mime)) {
let media = await venom.downloadAndSaveMediaMessage(quoted)
let venomsalveaudio = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${venomsalveaudio}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return enviar(err)
let buff = fs.readFileSync(venomsalveaudio)
venom.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted  : msg })
fs.unlinkSync(venomsalveaudio)
})
} else enviar(`Marque o audio que deseja adicionar efeito com o comamdo *${prefixo + comando}*`)
} catch (e) {
console.log(e)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'ping': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Velocidade de resposta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _mili segundos_\n\nTempo de execução : ${runtime(process.uptime())}`
enviar(respon)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'antilink': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isGrupo) return groupon(from)
if (!isGrupoAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return enviar('Digite on para ativar/off para desativar')
if (args[0] === "on") {
if (AntiLink) return enviar('Ja esta ativado')
ntilink.push(from)
enviar('Sucesso antilink ativado neste grupo')
} else if (args[0] === "off") {
if (!AntiLink) return enviar('Ja esta desativado')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
enviar('Sucesso antilink desativado neste grupo')
} else {
enviar('on para ativar, off para desativar')
}
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'clonarnick': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (qtod === "true") {
clonarnickvenomkk = await venom.getName(msg.quoted.sender)
enviar(clonarnickvenomkk)
} else if (qtod === "false") {
venom.sendMessage(from, {text:`marque a mensagem da pessoa que você que clonar o nick com o comando ${prefixo + comando}`}, {quoted:msg})
}
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'clonarperfil': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (qtod === "true") {
try {
pporg = await venom.profilePictureUrl(msg.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
venom.sendMessage(from, { image : { url : pporg }, caption:`Done` }, { quoted  : msg })
} else if (qtod === "false") {
try {
pporgs = await venom.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
venom.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, { quoted  : msg })
}
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'dono': case 'crator': {// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
venom.enviarContato(from, global.dono, msg)
}
break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
case 'mycanal':// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
let canal = `off
`
enviar(canal)

break
case 'mygrupo':// 𝙘𝙖𝙨𝙚 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
let grupo = `off
`
enviar(grupo)

break
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
default:
if (budy.startsWith('=>')) {// 𝙞𝙛 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return enviar(bang)}
try {
enviar(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
console.log(chalk.redBright(String(e)))
}}
if (budy.startsWith('>')) {// 𝙞𝙛 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await enviar(evaled)
} catch (err) {
console.log(chalk.redBright(String(err)))}}

if (budy.startsWith('$')) {// 𝙞𝙛 𝙗𝙮 𝙫𝙚𝙣𝙤𝙢
if (!isCreator) return enviar(resposta.dono) 
exec(budy.slice(2), (err, stdout) => {
if(err) return console.log(chalk.redBright(err))
if (stdout) return enviar(stdout)})}
}
} catch (err) {
console.log(chalk.redBright(err))
}}
//=========================𝙫𝙚𝙣𝙤𝙢𝙗𝙖𝙨𝙚𝙫3========================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`${__filename} foi atualizado`))
	delete require.cache[file]
	require(file)
})