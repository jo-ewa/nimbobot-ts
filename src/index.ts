import Discord from "discord.js"
import { TOKEN } from "./config"
import { onMessage } from "./message"

const client = new Discord.Client()

client.on("ready", () => {
    console.log("The bot is online")
})

client.on("message", onMessage)

client.login(TOKEN)