/**
 * Ler arquivo json de hirarquia (dicts) e retorna o objeto correspondente
*/
import fs from 'fs/promises';
import type { Hierarchy } from "../types/hirarchy.type"
import { DICTS_PATH } from '../config/config';

export async function loadDict(): Promise<Array<Hierarchy>> {
    const data = await fs.readFile(DICTS_PATH, 'utf8');
    return JSON.parse(data);
}