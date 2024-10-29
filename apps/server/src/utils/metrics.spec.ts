import { calculateTime } from "./metrics";

describe('calculateTime', () => {
    it('Should return the result of the callback function and its execution time', async () => {
        const mockCallbackFunction = jest.fn(async () => {
            return 2 + 2
        })

        const [result, time] = await calculateTime(mockCallbackFunction);

        expect(result).toBe(4);
        expect(time).toBeGreaterThan(0);
    })
})