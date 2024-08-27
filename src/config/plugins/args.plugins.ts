import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .options("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "El limite de la tabla de multiplicar",
  })
  .options("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Sale la tabla en consola",
  })
  .options("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "File Name",
  })
  .options("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File Destination",
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || argv.b < 1) {
      throw new Error("La base tiene que ser un numero y mayo que 0");
    }
    return true;
  })
  .parseSync();
