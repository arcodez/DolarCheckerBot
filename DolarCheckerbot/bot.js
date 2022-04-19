const { Telegraf } = require("telegraf");
const bot = new Telegraf("5243868127:AAE6_-8q4Yzl-pRN4nxDCgPRDPk11TZcWIE");

bot.start((ctx) => ctx.reply("Welcome!"));

bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.on("sticker", (ctx) => ctx.reply("👍"));

bot.launch();
