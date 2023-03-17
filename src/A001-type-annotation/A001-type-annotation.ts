/* eslint-disable */

let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbolo');
// let big: bigint = 10n;

// Arrays

let arrayDeNumeros: number[] = [1, 2 , 3];
let arrayDeString: string[] = ['a', 'b' , 'c'];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Matheus',
    idade: 25,
}


// Funções
function soma(x: number, y: number): number {
    return x + y
}
const soma2: (x: number, y: number) => number = (x, y) => x + y
