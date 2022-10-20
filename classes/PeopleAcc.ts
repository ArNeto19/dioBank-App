import { DioAccount } from "./DioAccount";

export class PeopleAcc extends DioAccount {
  private doc_id: number

  constructor(doc_id: number, name: string, docNum: number) {
    super(name, docNum)
    this.doc_id = doc_id
  }

  getDoc_Id = (): string => {
    return `Document Id: ${this.doc_id}`
  }
}
