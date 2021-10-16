# Wabot

<p>uma simples base de bot para Whatsapp, feita para facilitar a criação de comandos, modularização e manutenção</p>

## clonando repositório do github
```bash
> git clone https://github.com/rafaelcode0337/wabot-ts.git
```
## instalando as dependencias
```bash
> cd wabot-ts
> npm i
```

## criando comandos para o bot

```typescript
// src/commmands/menu.ts

import { Message, Whatsapp } from 'venom-bot'


export async function menu(bot: Whatsapp, msg: Message) {
  await bot.sendText(
    msg.from,
    `chatbot - menu

    /teste
    `
  )
};
```
<p>esse bot usa a bliblioteca venom-bot, as funções de callback passadas para a classe wabot recebem como parâmetro  os objetos Whatsapp (client) e  Message ( mensagem recebida ), assim você pode usalos dentro da função de callback do comando e controlar seu bot como quiser, para mais informações dos métódos e atributos dos objetos Whatsapp e Message consulte a <a href="https://orkestral.github.io/venom/index.html">documentação oficial do venom</a>.</p>

## instânciando e adicionando comandos

```typescript

import { WaBot, commandSystem } from './src/wabot/index';
import { menu } from './src/commands/menu';

async function RunBot(prefix: string) {
  const bot = new WaBot(prefix)

  bot.addCommandHandler('menu', menu)

  await bot.start(commandSystem)
}

RunBot('/');
```

## rodando bot

### compilando typescript para javascript e rodando os arquivos javascript

```bash
> npm run build
> npm run start
```
<p>você também pode usar o comando abaixo para fazer a compilação e rodar</p>

```bash
> npm run build:start
```

### rodando em ambiente de desenvolvimento

<p>para que não haja necessidade de compilar o typescript toda vez que forem feitas alterações enquanto estiver desenvolvendo seu bot você pode usar o seguinte comando</p>

```bash
> npm run start:dev
```

<p>ele usára o ts-node-dev para rodar seu código typescript e reiniciará automaticamente quando ouverem alterações</p>