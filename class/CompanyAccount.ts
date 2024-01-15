// CompanyAccount.ts
import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  // Método para verificar as contas
  checkAccount() {
    const status = this.getValidateStatus();
    const balance = this.getBalance();
    console.log('Status da conta: ' + status);
    console.log('Saldo da conta: ' + balance);
  }

  // Método para obter um empréstimo
  getLoan(value: number): void {
    if(this.getValidateStatus()){
      this.deposit(value);
      console.log('Você pegou um empréstimo de ' + value);
    }
  }

  // Método para exibir o saldo
  method() {
    console.log('O saldo da sua conta é ' + this.getBalance());
  }
}