// Aula Sobre Strings ->

// var nome = "Jonathan Moreira de Andrade Barbosa";
// var idade = 26;
// console.log('Meu nome é: '+ nome + ' e minha idade atualmente é: ' + idade);
// alert('Meu nome é: '+ nome + ' e minha idade atualmente é: ' + idade);
// var futebol = "Barcelona melhor time do mundo";
// alert(futebol.replace('Barcelona', 'Flamengo')); // o Replace modifica a parala celecionada "".

// Aula sobre Array ->

// var lista = ['Jonathan','Lidia','Jessyca','Cristiane'];
// lista.push('Rosangela'); // Insere um novo valor a lista.
// console.log(lista)
// lista.pop(); // Remove o ultimo valor da lista.
// console.log(lista.length); // Conta a quantidade de itens tem na lista.
// console.log(lista.reverse()); // inverte os valores da lista.
// console.log(lista.toString()); // Trasnforma todo conteudo da lista em uma string
// console.log(lista.join(" - ")); // Acrecenta strings a lista

// var fruta = {nome: "Banana", cor:"Verde"}
// console.log(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome: "Banana", cor:"Verde"}, {nome: "Maça", cor:"Vermelha"}];
// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1]);

// Condição em JS ->

// var idade = 18;
// var idade = prompt("Qual sua idade: ");

// if(idade >= 18 ){
//     alert('Sua idade é: '+ idade +' portanto você e maior de idade');
// }else{
//     alert('Sua idade é: '+ idade +' portanto você e menor de idade');
// }

// Lanço de Repetição JS ->

// var count = 0;
// while (count < 10){
//     console.log(count);
//     count++;
// };

// var count;
// for(count = 0; count < 5; count++){
//     console.log(count);
// };

// sobre data

// var data = new Date();
// alert(data);
// alert(data.getDate()+'/'+ (data.getMonth()+1));
// alert(data.getDate());

// function soma(n1, n2){
//     return n1 + n2 ;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);
// }

// alert(soma(5,10));
// alert(setReplace("vai Japão", "Japão", "Brasil"));


function validarIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade? ");
alert(validarIdade(idade));