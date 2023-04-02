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

const fs = require('fs')
const chalk = require('chalk')
//—————「 Configure aqui  」—————//

global.dono = ['556798101720']
global.prefixo = ['!'] 
global.reagir1 = '👌'
global.packname = 'Criador:\nCanal:'
global.author = '556798101720\nyoutube.com/keya'

global.resposta = {
  espere: '*Carregando... calma ae *_', 
  privado: 'Recurso usado apenas para um bate-papo privado!',
  dono: '*Este comando so pode se usado pelo meu dono*',  
  grupo: '*Este comando fucionar apenas em grupos*',
  myadm: '*Eu preciso se um adm do grupp para executar este comando*',
  adm: '*Este comando so é para adm do grupo*',
  sucesso: '*Feitinho*', 
  bot: 'Recurso so para usuários o bot',

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`${__filename} foi atualizado`))
	delete require.cache[file]
	require(file)
})