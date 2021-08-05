import { getNum } from "./tddSample"

describe("はじめてのテスト駆動", () => {
  it("数値を入れると1を返すテスト", () => {
    expect(getNum(1)).toBe(1)
  })
})