/** Arquivo cuja única responsabilidade é iniciar o servidor.
 *  Poderíamos, contudo, iniciá-la no próprio main.ts
 * 
 */
import { App } from "./app";

const app = new App();

app.listen();