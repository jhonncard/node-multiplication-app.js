import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/seve-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  name: string;
  destination: string;
}

export class ServerApp {
  static run({ base, limit, showTable, name, destination }: RunOptions) {
    console.log("Server running.... ");

    const table = new CreateTable().execute({ base, limit });

    const wasCreate = new SaveFile().execute({ fileContent:table , destination , name});
    
    if (showTable) {
      console.log(table);
    }
  }
}
