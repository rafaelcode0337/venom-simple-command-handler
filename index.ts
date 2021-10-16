import { WaBot, commandSystem } from './src/wabot/index';
import { menu } from './src/commands/menu';

async function RunBot(prefix: string) {
  const bot = new WaBot(prefix)

  bot.addCommandHandler('menu', menu)

  await bot.start(commandSystem)
}

RunBot('/');


