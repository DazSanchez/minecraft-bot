const mineflayer = require("mineflayer");
const config = require("./config.json");

console.log("Creando bot");
const bot = mineflayer.createBot(config);

const handleFishError = (error) => {
  if (error) {
    bot.chat("Ocurrió un error mientras pescaba");
    console.error(error);
  }
};

bot.on("spawn", () => {
  console.log("El bot ha aparecido en el mundo");
  bot.fish(handleFishError);
});

bot.on("playerCollect", (collector, _collected) => {
  console.log("El bot ha recolectado algo");
  if (collector.username === bot.username) {
    bot.fish(handleFishError);
  }
});

bot.on("error", console.error);
