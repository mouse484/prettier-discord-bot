const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.js");

const prettier = require("prettier");
const options = prettier.resolveConfig.sync("./.prettierrc.js");

client.on("ready", () => {
    console.log(`Botを起動しました:${client.user.tag}`);
});

client.on("message", (message) => {
    if (message.author.bot) return;

    if (!message.content.match(/```(js|JavaScript|javascript).+```/s))return;

    const code = message.content.split(/```(js|JavaScript|javascript)/)[2].split("```")[0];

    const formatted_code = prettier.format(code, options);

    message.channel.send(formatted_code, { code: "JavaScript" });
});

client.login(config.token);
