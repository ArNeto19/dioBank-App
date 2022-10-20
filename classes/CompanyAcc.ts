import { DioAccount } from "./DioAccount";

export class CompanyAcc extends DioAccount {

  constructor(name: string, docNum: number) {
    super(name, docNum)
  }

  getLoan = (value: number): void => {
    console.log('Your loan was authorized.')
    this.deposit(value);
  }

}
