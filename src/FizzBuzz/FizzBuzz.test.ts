import { fizzBuzzMachine } from "./FizzBuzz"

describe("FizzBuzz問題のテスト", () => {
  it("数値を入力すると、文字列の数値を返す_1 を入力すると、文字列 1 を返すことを確認", () => {
    expect(fizzBuzzMachine(1)).toBe("1")
  })
  it("数値を入力すると、文字列の数値を返す_2 を入力すると、文字列 2 を返すことを確認", () => {
    expect(fizzBuzzMachine(2)).toBe("2")
  })
  it("3 の倍数を入力すると、Fizz を返す_3 を入力すると、Fizzを返すことを確認", () => {
    expect(fizzBuzzMachine(3)).toBe("Fizz")
  })
  it("5 の倍数を入力すると、Buzz を返す_5 を入力すると、Buzzを返すことを確認", () => {
    expect(fizzBuzzMachine(5)).toBe("Buzz")
  })
  it("3と5 の倍数を入力すると、FizzBuzz を返す_15 を入力すると、FizzBuzzを返すことを確認", () => {
    expect(fizzBuzzMachine(15)).toBe("FizzBuzz")
  })
})
