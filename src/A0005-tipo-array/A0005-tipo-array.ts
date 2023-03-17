export function multiplicaArgs(...args: number[]): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}
export function concatenaStrings(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}
export function toUpperCase(...args: string[]): string[] {
    return args.map((string) => string.toUpperCase());
}

const result = multiplicaArgs(1, 2, 4);
const resultString = concatenaStrings('Ma', 'the', 'us');
const resultUpper = toUpperCase('ma', 'the', 'us');

console.log(resultString);
console.log(result);
console.log(resultUpper);
