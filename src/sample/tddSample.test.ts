import { getNum } from "./tddSample"

describe("入力した数を倍にして返すプログラムを作るテスト", () => {
  it("1を入れると、2を返す", () => {
    expect(getNum(1)).toBe(2)
  })
  it("100を入れると、200を返す", () => {
    expect(getNum(100)).toBe(200)
  })
})