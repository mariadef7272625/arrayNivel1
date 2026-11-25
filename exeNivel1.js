/*1. Você está organizando a chamada de uma turma com os alunos ["Ana", "Bruno", "Carla", "Diego", "Elena"] para 
conferir quem abre e quem fecha a lista. Crie uma função fnExibirChamada() que declare esse array e exiba no 
terminal o primeiro aluno, o último aluno usando .length e o total de estudantes cadastrados.*/
function fnExibirChamado() {
    var alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"];
    console.log("Primeiro aluno: " + alunos[0]);
    console.log("Último aluno: " + alunos[alunos.length - 1]);
    console.log("Total de estudantes: " + alunos.length);

    fnExibirChamado();
}

/*2. Durante o fechamento de um pedido online, o array ["Teclado Mecânico", "Mouse Gamer"] já contém dois itens e o 
cliente resolveu incluir "Headset USB". Crie uma função fnAdicionarProduto(lista, novoItem) que adicione o novo 
item ao final do array e mostre a lista atualizada no terminal.*/
function fnAdicionarProduto(lista, novoItem) {
    lista.push(novoItem);
    console.log(lista);
}
var produtos = ["Teclado Mecânico", "Mouse Gamer"];

fnAdicionarProduto(produtos, "Headset USB");

/*3. Na recepção de um posto de saúde, a fila normal está com ["Marcos", "Juliana", "Roberto"] e chega "Dona Clara 
(Idosa)" com atendimento prioritário. Crie uma função fnEncaixarPrioridade(fila, nomePaciente) que coloque a 
paciente prioritária na frente da fila e exiba a nova sequência.*/
function fnEncaixarPrioridade(fila, nomePaciente) {
    fila.unshift(nomePaciente);
    console.log(fila);
}
var fila = ["Marcos", "Juliana", "Roberto"];
fnEncaixarPrioridade(fila, "Dona Clara (Idosa)");

/*4. A partir da fila ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"], o consultório vai iniciar o atendimento da 
manhã. Crie uma função fnChamarProximo(fila) que retire o primeiro nome da fila e exiba no terminal quem foi 
chamado e quem continua aguardando.*/
function fnChamarProximo(fila) {
    var chamado = fila.shift();
    console.log("Paciente chamado: " + chamado);
    console.log("Pacientes aguardando: ");
    console.log(fila);
}
var fila = ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"];
fnChamarProximo(fila);

/*5. Em um editor de texto simples, o usuário realizou as ações ["Escreveu título", "Aplicou negrito", "Inseriu tabela"] e 
quer desfazer o que fez por último. Crie uma função fnDesfazerAcao(lista) que remova o último elemento do array e 
mostre no terminal as ações restantes.*/
function fnDesfazerAcao(lista) {
    var acaoRemovida = lista.pop();
    console.log("Ação desfeita: " + acaoRemovida);
    console.log("Ações restantes: ");
    console.log(lista);
}
var acoes = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"];
fnDesfazerAcao(acoes);

/*6. O responsável pelo almoxarifado precisa conferir quantos itens existem no array ["Camiseta", "Calça", "Tênis", 
"Boné"] antes de iniciar a contagem física. Crie uma função fnVerificarEstoque(lista) que exiba no terminal a 
quantidade total de itens usando .length.*/
function fnVerificarEstoque(lista) {
    var quantidade = lista.length;
    console.log("Total de itens no estoque: " + quantidade);
    fnVerificarEstoque(produtos);
}

/*7. Na portaria de um evento, a lista oficial de convidados é ["Lucas", "Mariana", "Thiago", "Beatriz"] e duas pessoas 
chegam perguntando se estão autorizadas: "Mariana" e "Rafael". Crie uma função fnEstaNaLista(lista, nome) que 
verifique a presença de cada nome no array e exiba o resultado no terminal.*/
const alunos = ["Lucas", "Mariana", "Thiago", "Beatriz"];

alunos.forEach((aluno, indice) => {
  console.log(`${indice + 1}º Aluno: ${aluno}`);
});

/*8. Em um mercado, os corredores seguem a ordem ["Arroz", "Feijão", "Açúcar", "Café", "Sal"] e um repositor precisa 
saber a posição exata de "Café" e conferir se "Macarrão" consta no array. Crie uma função fnConsultarCorredor(lista, 
item) que retorne ou exiba a posição encontrada ou o aviso de que o item não está no array.*/
const corredores = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"];
corredores.forEach((lista, item) => {
  console.log(`${item + 1}º Item: ${lista}`);
});

/*9. A tabela de preços base de um lanche está armazenada em [15.00, 25.00, 40.00] e o segundo item sofreu reajuste 
para 28.50. Crie uma função fnAtualizarPreco(lista, indice, novoValor) que altere o valor na posição informada e 
exiba o array modificado no terminal.*/
function fnAtualizarPreco(lista, indice, novoValor) {
    lista[indice] = novoValor;
    console.log(lista);
}
var precos = [15.00, 25.00, 40.00];
fnAtualizarPreco(precos, 1, 28.50);

/*10. Para montar o boletim inicial de um estudante com as notas 8.0, 7.5 e 9.0, você precisa agrupar esses valores em 
uma única estrutura. Crie uma função fnCriarBoletim(nota1, nota2, nota3) que armazene as três notas em um array e 
o exiba ou retorne para conferência.*/
function fnCriarBoletim(nota1, nota2, nota3) {
    var boletim = [nota1, nota2, nota3];
    return boletim;
}
var resultado = fnCriarBoletim(8.0, 7.5, 9.0);
console.log(resultado);

