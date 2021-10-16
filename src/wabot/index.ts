import { create, Whatsapp } from "venom-bot";

export class command{
  public name: string;
  public callback: Function;

  constructor(name: string, callback: Function){
    this.name = name;
    this.callback = callback;
  }
};

export class WaBot{
  public prefix: string;
  public commands: Array<command>;
  public client: Whatsapp;

  constructor(prefix: string){
    this.prefix = prefix;
    this.commands = [];
  }

  async InstanceClient(){
    this.client = await create('WaBot');
  }

  async start(startCallback?: Function) {
    await this.InstanceClient();
    if(startCallback){
      startCallback(this)
    };
    
  }

  addCommandHandler(name: string, callback: Function){
    this.commands.push(new command(name, callback));
  }
}

export function commandSystem(Wabot: WaBot){
  Wabot.client.onMessage(async m => {
    Wabot.commands.forEach(cmd => {
      if(m.body == Wabot.prefix + cmd.name){
        console.log(`${m.body} de ${m.author}`)
        cmd.callback(Wabot.client, m)
      }
    })
  })
}