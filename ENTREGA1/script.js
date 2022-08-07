/*
Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA.
Luego crea una function map() que tome dos entradas o parámetros:
un array de como valores números. 
una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada.
*/
const numeros = [14, 40, 912, '31','27','8','10',18];

function gastoConIva(num){
    return (num*0.21)+num;
}

function map(array, callback) {
    const resultado = [];

    for (let i=0;i<array.length;i++){
        resultado.push(callback(Number(array[i])));
    }
    return resultado;
}
console.log(map(numeros, gastoConIva));