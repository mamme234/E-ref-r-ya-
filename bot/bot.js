require("dotenv").config();

const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();

/* ================= CONFIG ================= */

const BOT_TOKEN = process.env.BOT_TOKEN;

const APP_URL = "https://esrefruya.vercel.app";

const PORT = process.env.PORT || 10000;

/* ================= EXPRESS ================= */

app.get("/", (req, res) => {

  res.send("🌃 Shadow Dream Bot Running");

});

app.listen(PORT, () => {

  console.log(
    "Server running on port " + PORT
  );

});

/* ================= TELEGRAM BOT ================= */

const bot = new TelegramBot(BOT_TOKEN, {
  polling: true
});

/* ================= START ================= */

bot.onText(/\/start/, async (msg) => {

  const name = msg.from.first_name;

  await bot.sendMessage(

    msg.chat.id,

`🌃 Welcome ${name}

The city remembers everything.

Enter Shadow Dream and build your reputation.`,

    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🎮 Open Shadow Dream",
              web_app: {
                url: APP_URL
              }
            }
          ]
        ]
      }
    }

  );

});

/* ================= STORY ================= */

bot.onText(/\/story/, async (msg) => {

  await bot.sendMessage(

    msg.chat.id,

`🌧 Episode 1

Aras returned to the city after five years.

Rain covered the streets.

A black car stopped beside him.

Inside the car was Demir.

"Your brother owed us," he said.`

  );

});

/* ================= MISSIONS ================= */

bot.onText(/\/missions/, async (msg) => {

  await bot.sendMessage(

    msg.chat.id,

`🔥 Available Missions

1️⃣ Street Deal
💰 Reward: $100

2️⃣ Night Fight
💰 Reward: $250

3️⃣ Boss Mission
💰 Reward: $600`

  );

});

/* ================= PROFILE ================= */

bot.onText(/\/profile/, async (msg) => {

  const user = msg.from;

  await bot.sendMessage(

    msg.chat.id,

`👤 Player Profile

🆔 ID: ${user.id}

👤 Name: ${user.first_name}

🌃 Rank: Street Rookie

⭐ Reputation: 1

💰 Money: $0`

  );

});

/* ================= HELP ================= */

bot.onText(/\/help/, async (msg) => {

  await bot.sendMessage(

    msg.chat.id,

`📌 Commands

/start - Open game
/story - Story mode
/missions - Missions
/profile - Profile
/help - Help`

  );

});

console.log("🤖 Shadow Dream Bot Running...");
