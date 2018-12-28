const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./info.json");
let prefix = config.prefix;
client.on("ready", () => {
   console.log("Estoy listo!");
});

client.on("message", (message) => {
if (message.content.startsWith(prefix +"checkStatus")){
    message.channel.send({embed: {
      color: 3447003,
      description: "Si puedes ver esto, significa que el BOT funciona, Si quieres revisar el estado puedes entrar al foro de Heroku (Host) y Discord."
    }});
    console.log("Un usuario revisó el estado del bot")
}
if (message.content.startsWith(prefix +"youtube")){
    message.channel.send({embed: {
      color: 3447003,
      description: "El Canal de YouTube de Playerl es: https://www.youtube.com/channel/UCRqFt6Th663H2r6u6Al34fw?view_as=subscriber"
    }});
    console.log("Un usuario visitó el canal de Playerl!")
}
if (message.content.startsWith(prefix +"twitter")){
    message.channel.send({embed: {
      color: 3447003,
      description: "El Twitter de Playerl es: https://www.twitter.com/playerl_repoio"
    }});
    console.log("Un usuario visitó el Twitter de Playerl!")
}
if (message.content.startsWith(prefix +"help")){
    message.channel.send({embed: {
      color: 3447003,
      description: "Prefix: -p \\// Comandos: p-help (Ayuda) / p-checkStatus (Revisa el estado del bot) / p-youtube (Canal de YouTube de Playerl) / p-Twitter (Twitter de Playerl) / p-(cualquier frase) (Platicar con el Bot, tal cual y como Playerl respondería)"
    }});
    console.log("Un usuario necesita ayuda con el bot")
}
if (message.content.startsWith(prefix +"Hola")){
message.reply("Hola, ¿Cómo estás?")
}
if (message.content.startsWith(prefix +"hola")){
message.reply("Hola, ¿Cómo estás?")
}
if (message.content.startsWith(prefix +"Bien y tu?")){
message.reply("La verdad es que bien, gracias por preguntar")
}
if (message.content.startsWith(prefix +"Bien, ¿Y tú?")){
message.reply("La verdad es que bien, gracias por preguntar")
}
if (message.content.startsWith(prefix +"Bien y tu")){
message.reply("La verdad es que bien, gracias por preguntar")
}
if (message.content.startsWith(prefix +"Bien, y tu")){
message.reply("La verdad es que bien, gracias por preguntar")
}
if (message.content.startsWith(prefix +"Bien")){
message.reply("¡Me alegra oír eso!")
if (message.content.startsWith(prefix +"bien")){
message.reply("¡Me alegra oír eso!")
if (message.content.startsWith(prefix +"¡Bien!")){
message.reply("¡Me alegra oír eso!")
if (message.content.startsWith(prefix +"¡bien!")){
message.reply("¡Me alegra oír eso!")
}
if (message.content.startsWith(prefix +"Recomiendame un juego")){
message.reply("Obviemente, siempre diré el maravilloso y fantástico Rocket League, o Slime Rancher, o Evoland. Todos disponibles en G2A.")
};
if (message.content.startsWith(prefix +"recomiendame un juego")){
message.reply("Obviemente, siempre diré el maravilloso y fantástico Rocket League, o Slime Rancher, o Evoland. Todos disponibles en G2A.")
};
if (message.content.startsWith(prefix +"Recomiéndame un juego")){
message.reply("Obviemente, siempre diré el maravilloso y fantástico Rocket League, o Slime Rancher, o Evoland. Todos disponibles en G2A.")
};
if (message.content.startsWith(prefix +"recomiéndame un juego")){
message.reply("Obviemente, siempre diré el maravilloso y fantástico Rocket League, o Slime Rancher, o Evoland. Todos disponibles en G2A.")
};
}
}
}
else if(message.content.startsWith(prefix+"")) {
 message.channel.send("No te he entenido, disculpa");
    console.log("Un usuario escribió un comando no existente")
}
});

client.login(config.token);