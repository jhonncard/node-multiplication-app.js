import fs from "fs";
export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  destination: string;
  name: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /**
   * DI Dependency Injection
   */
  {}

  execute({
    fileContent,
    destination,
    name,
  }: Options): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/ ${name}.txt`, fileContent);
      console.log("archivo creado");
      return true;
    } catch (error) {
        console.error(error);
        return false;
    }
  }
}
