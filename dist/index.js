"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const config_1 = require("./config");
const client = new discord_js_1.default.Client();
client.on("ready", () => {
    console.log("The bot is online");
});
client.login(config_1.TOKEN);
//# sourceMappingURL=index.js.map