# Projeto DioBank

Este projeto consiste em uma série de classes TypeScript que representam diferentes tipos de contas bancárias.
As classes foram recentemente atualizadas para melhorar a funcionalidade e a usabilidade do mesmo.
Aqui estão os detalhes das alterações feitas:

## DioAccount.ts

A classe `DioAccount` é a classe base abstrata para todas as contas.
Ela contém métodos para depositar e sacar dinheiro, bem como para obter e definir o nome do titular da conta.
 Nenhuma alteração foi feita nesta classe.

## CompanyAccount.ts

A classe `CompanyAccount` estende a classe `DioAccount`. As seguintes melhorias foram feitas nesta classe:

- Adicionado o método `checkAccount` para verificar o status e o saldo da conta.
- Adicionado o método `getLoan` para obter um empréstimo, que é adicionado ao saldo da conta.
- Atualizada a mensagem de console no método `method` para torná-la mais descritiva.

## NewAccount.ts

A classe `NewAccount` também estende a classe `DioAccount`. A seguinte melhoria foi feita nesta classe:

- Modificado o método `deposit` para adicionar um bônus de 10 ao valor do depósito.
A mensagem de console também foi atualizada para exibir o saldo final após o depósito.

## PeopleAccount.ts

A classe `PeopleAccount` estende a classe `DioAccount` e adiciona um campo para o ID do documento.
As seguintes melhorias foram feitas nesta classe:

- Adicionado o método `getDocId` para obter o ID do documento.
- Adicionado o método `setDocId` para alterar o ID do documento.
#
