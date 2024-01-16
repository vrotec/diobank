// DioAccount.ts é classe que se refere funções de prncipal e importantes das outras dependem dela
export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // Método para alterar o nome
  setName(name: string): void {
    this.name = name;
    console.log('Nome atualizado com sucesso!');
  }

  // Método para obter o nome
  getName(): string {
    return this.name;
  }

  // Método para depositar um valor
  deposit(value: number): void {
    if(this.validateStatus()){
      this.balance += value;
      console.log('Você depositou ' + value);
    }
  }

  // Método para sacar um valor
  withdraw(value: number): void {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value;
      console.log('Você sacou ' + value);
    } else {
      console.log('Saldo insuficiente ou conta inválida');
    }
  }

  // Método para obter o saldo. Agora retorna o valor do saldo.
  public getBalance(): number {
    return this.balance;
  }

  // Método para obter o status de validação
  public getValidateStatus(): boolean {
    return this.validateStatus();
  }

  // Método privado para validar o status
  private validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
