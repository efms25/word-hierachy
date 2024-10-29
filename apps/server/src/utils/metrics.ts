/**
 * Calcula a diferença do tempo entre o início e o fim da execução de uma função em ms
 * Para melhor precisão, está sendo usada a api Performance do JS
 * @Param callback - função assíncrona que passará pela verificação
 * @returns [result, time] - retorno da função do callbck e o tempo de execução
 */

export async function calculateTime(callback: Function) {
    const beginTime = performance.now();
    const result = await callback();
    const endTime = performance.now();

    return [result, endTime - beginTime]
}