// Rest -> usando a variavel Global Arguments. 
function sum(a, b){
    var value = 0;

    for (var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }
    return value;
}

console.log(sum(3+6+8));