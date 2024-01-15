// app.ts aqui é onde visializamos as funcoes em execução usando o console.log
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { DioAccount } from './class/DioAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'vava', 111);
console.log(peopleAccount); // Exibe os detalhes da conta peopleAccount
peopleAccount.deposit(55); // Deposita 55 na conta peopleAccount e exibe uma mensagem
peopleAccount.setDocId(10); // Atualiza o ID do documento e exibe uma mensagem

const companyAccount: CompanyAccount = new CompanyAccount('vrotec', 222);
companyAccount.deposit(110); // Deposita 22 na conta companyAccount e exibe uma mensagem
console.log(companyAccount); // Exibe os detalhes da conta companyAccount
companyAccount.checkAccount(); // Verifica a conta e exibe uma mensagem
companyAccount.getLoan(1500); // Obtém um empréstimo e exibe uma mensagem
companyAccount.method(); // Exibe o saldo da conta

const newAccount: NewAccount = new NewAccount('zeze', 100);
newAccount.deposit(250); // Deposita 11 (mais 10 adicionais devido à lógica na classe NewAccount) na conta newAccount e exibe uma mensagem
console.log(newAccount); // Exibe os detalhes da conta newAccount
