import yargs from 'yargs';
import Table from 'cli-table3'
import { hideBin } from 'yargs/helpers'
import { calculateTime } from "./src/utils/metrics";
import { analyzeText } from './src/utils/hirarchyAnalyzer';
import { loadDict } from './src/utils/dictLoader';

async function loadParams() {
    const argv = yargs(hideBin(process.argv))
        .command('analyze', "Analisa frases e compara com uma hirarquia", (yargs) => {
            return yargs
                .option('depth', {
                    type: 'number',
                    description: 'Profundidade segundo a qual será analisada na hirarquia',
                    default: 1
                })
                .option('verbose', {
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

    const heirarchyTree = await loadDict();
    const [args, argsLoadingTime] = await calculateTime(loadParams);
    const [count, countTime] = await calculateTime(() => analyzeText(heirarchyTree,args._[1],args.depth))

    if(args.verbose) {

        const metricsTable = new Table({
            head: ['Metrica', 'Tempo de execução'],
            colWidths: [40,20]
        })

        metricsTable.push(
            ['Tempo de carregamento de parâmetros: ', argsLoadingTime],
            ['Tempo de verificação da frase: ', countTime]
        )

        console.log(metricsTable.toString());
    }

    if(!count.size) {
        console.log('Nenhuma palavra encontrada')
        return;
    }
    
    const resultTable = new Table({
        head: ['Palavra de Referência', 'Mencionados'],
        colWidths: [30, 20]
    })


    count.forEach((value: number, key: string) => {
        resultTable.push(
            [key, value]
        )
    })
    console.log(resultTable.toString());
}

main();
