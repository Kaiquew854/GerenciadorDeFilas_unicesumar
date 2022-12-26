# GerenciadorDeFilas_unicesumar

### link do projeto: https://kaiquew854.github.io/GerenciadorDeFilas_unicesumar/

A espera em bancos e outros estabelecimentos é um problema que pode até virar questão jurídica. Alguns estados limitam o tempo de espera que um estabelecimento deve ter, porém não há uma lei definindo um tempo.

Há uma norma de autorregulação da Febraban (Federação Brasileira de Bancos), que define uma espera máxima de 20 minutos em filas para horários comuns ou 30 minutos para horários de pico.

Além disso, caso o cliente tenha que esperar em pé, sem acesso à água ou banheiro, a empresa pode enfrentar complicações jurídicas. Para minimizar o problema e trazer mais conforto aos usuários, vários bancos e lojas adotaram o sistema de senhas, com controle de prioridades.

Imagine que você é um desenvolvedor que foi contratado para desenvolver um sistema de controle de filas de um banco ou uma loja fictícia. Nesta loja, há apenas 4 caixas de atendimento.

Os atendimentos a clientes podem ser divididos em 3 categorias:

- Preferencial: para pessoas que possuem atendimento prioritário assegurado por lei;
- Rápido: para pessoas que farão até 3 operações no caixa;
- Comum: para os demais atendimentos.

Seu trabalho terá 3 etapas:

1. Construção da interface,
2. Criação das filas de atendimento.

  Semelhante às máquinas de geração de senhas, há três botões para os clientes: Preferencial, Rápido e Comum. O cliente aperta o botão de acordo com o seu atendimento,     sua senha é gerada e colocada em uma fila, de acordo com o seu tipo.

  A senha deve ter a letra do tipo do atendimento (P, R ou C), seguida de um número sequencial. A sequência numérica é a mesma para os diferentes tipos. Por exemplo,     se   chegarem 4 clientes, 1 sendo preferencial, 2 comuns e 1 atendimento rápido, nesta ordem, a fila será:

   P-1, C-2, C-3, R-4.

  Haverá três filas na implementação, que podem ser feitas com array simples em JavaScript, contendo todas as senhas geradas em texto, de acordo com os seus tipos. A     senha precisa apenas de dois atributos: o tipo e o número.
 
 3. Realização dos atendimentos.

Haverá 4 caixas para atendimentos, que atendem da seguinte forma:

- Caixa 1: Realiza os atendimentos preferenciais. Se não houver atendimentos preferenciais na fila, atende o próximo atendimento rápido. Se não houver também, atende o próximo comum. Se não houver nenhum, não faz nada.
- Caixas 2 e 3: Atendem primeiro as senhas de atendimento rápido, se não houver atende o próximo da atendimento prioritário. Se não houver também, atende o próximo comum. Se não houver nenhum, não faz nada.
- Caixa 4: Realiza os atendimentos comuns. Se não houver atendimentos comuns na fila, atende o próximo atendimento prioritário. Se não houver também, atende o próximo rápido. Se não houver nenhum, não faz nada.

Cada caixa tem o seu botão. Ao clicar o botão verifica a próxima senha a ser atendida, exibe a senha no painel, exibe o caixa respectivo ao botão e retira ela da fila. Se não houver nenhuma senha na fila, não faz nada.

O trabalho do MAPA será criar o programa acima usando HTML/CSS/JavaScript (com jQuery ou não). As operações precisam estar funcionando.
