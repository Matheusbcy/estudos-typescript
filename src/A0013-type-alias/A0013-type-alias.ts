type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magentro' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

type Idade = number;

type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: CorPreferida;
};

const pesssoa: Pessoa = {
    nome: 'Matheus',
    idade: 25,
    salario: 2_500,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor };
}

console.table(setCorPreferida(pesssoa, 'Magentro'));
