import { analyzeText } from "./hierarchyAnalyzer";
import { fiveHundredCharTextMock } from "../__MOCKS__/hierarchyAnalyzer.mock";

describe("analyzeText", () => {
  const hierarchyTree = [
    {
      name: "A1",
      children: [
        {
          name: "B2",
          children: [],
        },
        {
          name: "C2",
          children: [
            {
              name: "D3",
              children: [],
            },
            {
              name: "E3",
              children: [],
            },
          ],
        },
      ],
    },
  ];

  it("Should return a valid count and for a 5000+ text", async () => {
    const depth = 1;
    const result = await analyzeText(
      hierarchyTree,
      fiveHundredCharTextMock,
      depth
    );

    console.log(result);

    expect(result?.size).toBe(1)
    expect(result?.get('A1')).toBe(2)
  });

  it("Should return a valid word count", async () => {
    const text = "Este é um teste que contem D3 e E3 em uma frase";
    const depth = 2;
    const result = await analyzeText(hierarchyTree, text, depth);

    expect(result?.size).toBe(1);
    expect(result?.get("C2")).toBe(2);
  });

  it("Should return a empty map", async () => {
    const text = "Este é um teste que não contem correspondentes na arvore";
    const depth = 1;
    const result = await analyzeText(hierarchyTree, text, depth);

    expect(result?.size).toBe(0);
  });

  it("Should return a empty map for a if text is empty", () => {
    const text = "";
    const depth = 1;
    const result = analyzeText(hierarchyTree, text, depth);

    expect(result?.size).toBe(0);
  });
});
