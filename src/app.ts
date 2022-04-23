import { PromptSrevice } from "./core/prompt/prompt.service";

export class App {
   async run() {
        const res = await (new PromptSrevice()).input<number>('Число', 'number');
        console.log(res);
    }
}

const app = new App();
app.run();
