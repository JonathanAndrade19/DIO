//JS usando a variavel Global Arguments.

function sum(a, b){
    var value = 0;

    for (var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }
    return value;
}

console.log(sum(5+9+10+11));

// Rest operator 

function soma(...args){
    return args.reduce((acc, value) => acc + value, 0 );
}

console.log(soma(5,9,10,11));