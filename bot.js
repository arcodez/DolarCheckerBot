const { Telegraf } = require("telegraf");
const bot = new Telegraf("5243868127:AAE6_-8q4Yzl-pRN4nxDCgPRDPk11TZcWIE");

// Seriales de los billetes escoñetaos
const billetes = [
  {
    type: "1",
    serial: ["122D", "FG1F"],
  },
  {
    type: "5",
    serial: ["321D"],
  },
  {
    type: "20",
    serial: ["8789"],
  },
];

// create a array of billetes serials and unnested the array
const billetesSerial = billetes.reduce((acc, cur) => {
  return acc.concat(cur.serial);
}, []);

console.log(billetesSerial);

const serialsMoney = ["122D", "AAA2"];

// Inicio del bot
bot.start((ctx) => ctx.reply("Enviame los 4 ultimos digitos del billete"));

// add function to validate serialsMoney
bot.on("text", (ctx) => {
  const serial = ctx.message.text;
  if (billetesSerial.includes(serial)) {
    ctx.reply("Si te acepto este billete");
  } else {
    ctx.reply("Vete con tu billete mamalon");
  }
});

// esto casi lo mismo de arriba pero no lo manda a mamar
bot.hears(serialsMoney, (ctx) => ctx.reply("Es valido gracias por comprar"));

bot.launch();
