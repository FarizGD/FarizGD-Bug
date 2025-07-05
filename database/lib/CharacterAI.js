const CharacterAI = require("node_characterai");
const characterAI = new CharacterAI();

let chat;

async function initChat() {
  await characterAI.authenticateAsGuest();
  const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw";
  chat = await characterAI.createOrContinueChat(characterId);
}

async function sendMessage(message) {
  if (!chat) await initChat();
  const response = await chat.sendAndAwaitResponse(message, true);
  return response.text;
}

module.exports = { sendMessage };
