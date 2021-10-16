import { Message, Whatsapp } from 'venom-bot'


export async function menu(bot: Whatsapp, msg: Message) {
  await bot.sendText(
    msg.from,
    `chatbot - menu

    /teste
    `
  )
};
