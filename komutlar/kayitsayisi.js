const {
  JsonDatabase,
  YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("BotJsonData");
const yamldb = new YamlDatabase("BotYamlData");
//////////////////////////////////////////////
const discord = require('discord.js')


exports.run = async(client, message, args) => {
    let kayıtçı = "838761088899219456"
    if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)
    let u = message.mentions.users.first() || message.author;
 
    let toplamkayıtt = await db.fetch(`toplamkayıt_${u.id}`)
    let kızkayıtt = await db.fetch(`kızkayıt_${u.id}`)
    let erkekkayıtt = await db.fetch(`erkekkayıt_${u.id}`)

const embed = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıt Sayısı`)
.setColor("GOLD")
.addField('Sunucudaki toplam kayıt sayın :', `${toplamkayıtt === null ? "0" : `${toplamkayıtt}`}`, true)
.addField('Sunucudaki erkek kayıt sayın :', `${erkekkayıtt === null ? "0" : `${erkekkayıtt}`}`, true)
.addField('Sunucudaki kız kayıt sayın :', `${kızkayıtt === null ? "0" : `${kızkayıtt}`}`, true)


message.channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtsayı','kayıtsayısı'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-sayısı',
  description: 'kayıt sayısı',
  usage: 'kayıt sayısı'
}