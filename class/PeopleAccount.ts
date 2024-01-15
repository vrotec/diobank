// PeopleAccount.ts é classe que se refere a conta tipo fisica
import { DioAccount } from './DioAccount'

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  // Método para obter o ID do documento
  getDocId(): number {
    return this.doc_id;
  }

  // Método para alterar o ID do documento
  setDocId(doc_id: number): void {
    this.doc_id = doc_id;
    console.log('ID do documento atualizado com sucesso!');
  }
}
