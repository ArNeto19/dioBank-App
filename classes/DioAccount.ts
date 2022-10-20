export abstract class DioAccount {
  private readonly name: string;
  private readonly accNum: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accNum: number) {
    this.name = name;
    this.accNum = accNum;
  }

  getName = (): string => {
    return `Name: ${this.name}`
  }

  getAccNum = (): string => {
    return `Account Number: ${this.accNum}`
  }

  validadeStatus = (): boolean => {
    if (this.status) {
      return this.status
    } else {
      throw new Error('Invalid account')
    }
  }

  deposit = (value: number): void => {
    if (this.validadeStatus()) {
      console.log(`New deposit: R$${value}`);
      this.balance = this.balance + value;
    } else {
      throw new Error('We could not conclude the deposit.');
    }
  }

  withdraw = (value: number): void => {
    if (this.validadeStatus() && this.balance > value) {
      console.log(`New withdraw: R$${value}`);
      this.balance = this.balance - value;
    } else {
      throw new Error('We could not conclude the withdraw.');
    }
  }

  getBalance = (): void => {
    console.log(`Available balance: R$${this.balance}`);
  }

};
