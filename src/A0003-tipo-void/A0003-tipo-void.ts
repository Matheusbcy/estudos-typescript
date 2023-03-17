function semRetorno(...args: string[]): void {
    console.log(args.join(''));
}

const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Freitas',

    exibirNome(): void {
        console.log(this.nome + '' + this.sobrenome);
    },
};

semRetorno('Matheus', 'Freitas');
pessoa.exibirNome();

export { pessoa };
