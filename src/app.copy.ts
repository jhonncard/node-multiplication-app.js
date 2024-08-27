import  fs  from 'fs'
import {yarg as argv} from './config/plugins/args.plugins'


let outputMessage = "";
const base = argv.b;
const limit = argv.l;
const headerMessage = `
============================================
             TABLA DEL ${ base }
============================================\n
`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

const outputPath = `outputPath`;
outputMessage = (headerMessage + outputMessage);
if (argv.s) {
    console.log(outputMessage);
}


fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`outputs/tabla-${base}.txt`, outputMessage);

console.log('archivo creado');
