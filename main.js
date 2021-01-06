// Aula Sobre Strings ->

var nome = "Jonathan Moreira de Andrade Barbosa";
var idade = 26;
console.log('Meu nome é: '+ nome + ' e minha idade atualmente é: ' + idade);
alert('Meu nome é: '+ nome + ' e minha idade atualmente é: ' + idade);
var futebol = "Barcelona melhor time do mundo";
alert(futebol.replace('Barcelona', 'Flamengo')); // o Replace modifica a parala celecionada "".

// Aula sobre Array ->

var lista = ['Jonathan','Lidia','Jessyca','Cristiane'];
lista.push('Rosangela'); // Insere um novo valor a lista.
console.log(lista)
lista.pop(); // Remove o ultimo valor da lista.
console.log(lista.length); // Conta a quantidade de itens tem na lista.
console.log(lista.reverse()); // inverte os valores da lista.
console.log(lista.toString()); // Trasnforma todo conteudo da lista em uma string
console.log(lista.join(" - ")); // Acrecenta strings a lista

var fruta = {nome: "Banana", cor:"Verde"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "Banana", cor:"Verde"}, {nome: "Maça", cor:"Vermelha"}];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);