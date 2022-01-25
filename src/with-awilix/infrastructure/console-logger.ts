import { Logger } from "../domain/logger";

export class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}
