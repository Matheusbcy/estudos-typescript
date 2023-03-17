const objetoA: {
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'ValorA',
    chaveB: 'ValorB',
};

objetoA.chaveC = 'Nova Chave';
objetoA.chaveD = 'Nova Chave2';
objetoA.chaveF = 'Nova Chave3';

console.log(objetoA);
