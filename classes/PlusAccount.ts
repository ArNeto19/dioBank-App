import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount {

  constructor(name: string, docNum: number) {
    super(name, docNum)
  }

  depositPlus = (value: number): void => {

    let plusValue: number = value + 10
    console.log(`You made a R$${value} PLUS deposit!`)
    this.deposit(plusValue);
  }

}
