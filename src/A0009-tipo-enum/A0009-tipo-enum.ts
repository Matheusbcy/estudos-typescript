enum Cores {
    VERMELHO = 10,
    AZUL = 100,
    AMARELO = 1000,
}

enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA,
}

export function escolhaACor(cor: Cores): void {
    console.log(cor);
}
escolhaACor(Cores.ROXO);
