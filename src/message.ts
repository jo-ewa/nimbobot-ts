import { PREFIX } from "./config"

export async function onMessage(message: Message) {
    try {
        if (!message.content.startsWith(PREFIX) || message.author.bot) return

        console.log(`Recieved message from ${message.author.username} saying: ${message.content}`)

        const args = message.content.slice(PREFIX.length).trim().split(/ +/)
        const command = args.shift()?.toLowerCase()

        if (command === "play") {
            //play url
        } else if (command === "stop") {
            await message.channel.send("Uknown")
        }
    } catch (error) {
        console.log(error)
    }
}