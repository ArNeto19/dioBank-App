//Bank App
import { PeopleAcc } from "./classes/PeopleAcc";
import { CompanyAcc } from "./classes/CompanyAcc";
import { PlusAccount } from "./classes/PlusAccount";

const accountOne = new PeopleAcc(501, 'Armando', 1);
console.log('New People Account Created!');
console.log(accountOne.getName());
console.log(accountOne.getAccNum());
console.log(accountOne.getDoc_Id());
accountOne.deposit(1000);
accountOne.withdraw(600);
accountOne.getBalance();

const accountTwo = new CompanyAcc('ArN Inc.', 101);
console.log('New Company Account Created!');
console.log(accountTwo.getName());
console.log(accountTwo.getAccNum());
accountTwo.getLoan(2000);
accountTwo.getBalance();

const accountThree = new PlusAccount('Neto', 999);
console.log('New Plus Account Created!');
console.log(accountThree.getName());
console.log(accountThree.getAccNum());
accountThree.depositPlus(500);
accountThree.getBalance();
