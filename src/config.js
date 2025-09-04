/** @format */

module.exports = {
  token:
    "token",
  clientId: "1410605849864441856",
  prefix: ";",
  ownerID: "928931552132468747",
  SpotifyID: "85aab1d51a174aad9eed6d7989f530e6",
  SpotifySecret: "b2ad05aa725e434c88776a1be8eab6c2",
  mongourl:
    "mongodb+srv://codex-in2:codex-in2@codex-in2.gjv2c.mongodb.net/?retryWrites=true&w=majority",
  embedColor: "#2f3136",
  logs: "https://discord.com/api/webhooks/1413195986758664364/JERCg-dD3MlIK7XKnh5cG4USmaWYppxxAh-RmPJzPeThfBWavp0vrl99a5w0CG7OOXjN",
  node_source: "ytsearch",
  topgg:
    "here",
  links: {
    BG: "https://cdn.discordapp.com/attachments/1061636453437804544/1186002755924525166/20231217_232106.jpg",
    support: "https://discord.gg/urV9mkfW9t",
    invite:
      "https://discord.com/api/oauth2/authorize?client_id=1410605849864441856&permissions=824671333721&scope=bot",
    arrkiii:
      "https://cdn.discordapp.com/attachments/1187323477032697867/1236626903847407696/Arrkiii.gif",
    power: "Powered By Arrkiii Development 🌙",
    vanity: "discord.gg/urV9mkfW9t",
    guild: "1325384856477368420",
    topgg: "https://top.gg/bot/1033496708992204840/vote",
  },
  Webhooks: {
      black: "https://discord.com/api/webhooks/1413195986758664364/JERCg-dD3MlIK7XKnh5cG4USmaWYppxxAh-RmPJzPeThfBWavp0vrl99a5w0CG7OOXjN",
    player_create:
      "https://discord.com/api/webhooks/1413195986758664364/JERCg-dD3MlIK7XKnh5cG4USmaWYppxxAh-RmPJzPeThfBWavp0vrl99a5w0CG7OOXjN",
    player_delete:
      "https://discord.com/api/webhooks/1413195986758664364/JERCg-dD3MlIK7XKnh5cG4USmaWYppxxAh-RmPJzPeThfBWavp0vrl99a5w0CG7OOXjN",
    guild_join:
      "https://discord.com/api/webhooks/1413195986758664364/JERCg-dD3MlIK7XKnh5cG4USmaWYppxxAh-RmPJzPeThfBWavp0vrl99a5w0CG7OOXjN",
      guild_leave: "https://discord.com/api/webhooks/1413195986758664364/JERCg-dD3MlIK7XKnh5cG4USmaWYppxxAh-RmPJzPeThfBWavp0vrl99a5w0CG7OOXjN",
    cmdrun:
 "https://discord.com/api/webhooks/1413195986758664364/JERCg-dD3MlIK7XKnh5cG4USmaWYppxxAh-RmPJzPeThfBWavp0vrl99a5w0CG7OOXjN",
  },

  nodes: [
    {
       url: process.env.NODE_URL || "lava-v4.ajieblogs.eu.org:443",
      name: process.env.NODE_NAME || "Lavalink",
      auth: process.env.NODE_AUTH || "https://dsc.gg/ajidevserver",
      secure: parseBoolean(process.env.NODE_SECURE || "true"),
    },
  ],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
