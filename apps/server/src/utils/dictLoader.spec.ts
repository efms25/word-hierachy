import fs from 'fs/promises'
import { loadDict } from "./dictLoader";
import * as hirarchyType from "../types/hirarchy.type";
import { DICTS_PATH } from '../config/config';

describe('loadDict', () => {
    const mockData = [
      {
        name: "Root",
        children: [
          {
            name: "Child 1",
            children: [],
          },
        ],
      },
    ];
  
    beforeEach(() => {
      // Limpar todas as simulações antes de cada teste
      jest.clearAllMocks();
    });
  
    it('should read the JSON file and return the parsed data', async () => {
      // Simula o retorno de fs.readFile
      jest.spyOn(fs, 'readFile').mockResolvedValueOnce(JSON.stringify(mockData));
  
      const result = await loadDict();
  
      expect(fs.readFile).toHaveBeenCalledWith(DICTS_PATH, 'utf8'); 
      expect(result).toEqual(mockData); 
    });
  
    it('should throw an error if fs.readFile fails', async () => {
      const errorMessage = 'Failed to read file';
      jest.spyOn(fs, 'readFile').mockRejectedValueOnce(new Error(errorMessage));
  
      await expect(loadDict()).rejects.toThrow(errorMessage); 
    });
  });