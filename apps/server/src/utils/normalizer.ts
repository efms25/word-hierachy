/**
 * 
 * @param text - Texto original a ser normalizado, Pontuações serã oremovidas
 * @returns Texto normalizado
 */


export function normalizeText(text: string): string {
    return text.toLowerCase().replace(/[.,!?;:]/g, '').trim();
}