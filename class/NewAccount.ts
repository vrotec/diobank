// NewAccount.ts é classe que se refere a controle de fluxo para novas contas
import { DioAccount } from './DioAccount'

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  // Método para depositar um valor
  deposit(value: number): void {
    if(this.getValidateStatus()){
      this.deposit(value + 10);
      console.log('Você depositou ' + value + ', saldo final será de ' + this.getBalance());
    }
  }
}
