import{ yarg as argsv }from './config/plugins/args.plugins';
import { ServerApp } from './presentation/server.app';

// console.log(process.argv);

// console.log(argsv);



(async() => {
   await main();
})();

async function main() {
    const{b:base,l:limit,s:showTable, n:name, d:destination }  = argsv;
     
    ServerApp.run({base, limit, showTable, name, destination});
    
}