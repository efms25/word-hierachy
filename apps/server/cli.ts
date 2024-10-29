import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import { calculateTime } from "./src/utils/metrics";

async function loadParams() {
    const argv = yargs(hideBin(process.argv))
        .command('analyze', "Analisa frases e compara com uma hirarquia", (yargs) => {
            return yargs
                .option('depth', {
                    type: 'number',
                    description: 'Profundidade segundo a qual será analisada na hirarquia',
                    default: 1
                })
                .option('vervose', {
                    type: 'boolean',
                    describe: "Retornar calculos de tempo de execução",
                    default: false
                })
                .positional('text', {
                    type: 'string',
                    describe: "Texto a ser analisado",
                    demandOption: true
                });
        }).help().parseSync();
        return argv;
}

async function main() {

    const [args, argsLoadingTime] = await calculateTime(loadParams);
    
    console.log(args, 'args')
    if(args.verbose) {

        console.log('tempo de carregamento de parâmetros: ', argsLoadingTime)
    }

}

main();
