import { calculateTime } from "./metrics";

describe("calculateTime", () => {
  it("Should return the result of the callback function and its execution time", async () => {
    const mockCallbackFunction = jest.fn(async () => {
      return 2 + 2;
    });

    const [result, time] = await calculateTime(mockCallbackFunction);

    expect(result).toBe(4);
    expect(time).toBeGreaterThan(0);
  });

  it('should throw an error if the callback function also thorws', async () => {
    const mockCallbackFunction = jest.fn(async () => {
        throw new Error('Mock error');
    })

    await expect(calculateTime(mockCallbackFunction)).rejects.toThrow('Internal calculation error, please check the provided callback function. Error: Mock error')
  })
});
