"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMessage = void 0;
const config_1 = require("./config");
const discord_ytdl_core_1 = __importDefault(require("discord-ytdl-core"));
function onMessage(message) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!message.content.startsWith(config_1.PREFIX) || message.author.bot)
                return;
            console.log(`Received message from ${message.author.username} saying: ${message.content}`);
            const args = message.content.slice(config_1.PREFIX.length).trim().split(/ +/);
            const command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (command === "play") {
                const voiceChannel = (_b = message.member) === null || _b === void 0 ? void 0 : _b.voice.channel;
                if (!voiceChannel) {
                    yield message.channel.send("You must be in a voice channel");
                    return;
                }
                const url = args[0];
                const stream = discord_ytdl_core_1.default(url);
                const connection = yield voiceChannel.join();
                connection
                    .play(stream, { type: "opus" })
                    .on("error", (error) => console.log(error))
                    .on("close", () => {
                    stream.destroy();
                    connection.disconnect();
                });
            }
            else if (command === "stop") {
                const voiceChannel = (_c = message.member) === null || _c === void 0 ? void 0 : _c.voice.channel;
                if (!voiceChannel) {
                    yield message.channel.send("You must be in a voice channel");
                    return;
                }
                const connection = yield voiceChannel.join();
                connection.disconnect();
            }
            else {
                yield message.channel.send("Unknown command, try _play or _stop");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.onMessage = onMessage;
//# sourceMappingURL=message.js.map