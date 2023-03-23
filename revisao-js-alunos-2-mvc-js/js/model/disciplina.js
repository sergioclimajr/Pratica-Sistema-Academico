class Disciplina {
    constructor(codDisc, nomeDisc, alunosMatric) {
        this._codDisc = codDisc;
        this._nomeDisc = nomeDisc;
        this._alunosMatric = [];

    }

    get nomeDisc() {
        return nomeDisc;
    }

    set mudaNomeDisc(novoNomeDisc) {
        this._nomeDisc = novoNomeDisc
    }

    get codDisc() {
        return this._codDisc;
    }
    
    set mudaCodDisc(novoCodDisc) {
        this._codDisc = novoCodDisc;
    }

    get alunosMatric() {
        return this._alunosMatric;
    }

    set novosAlunosDisc(novosAlunos) {
    this._alunos = novosAlunos;
    }

    inserirAlunoEmDisciplina(aluno) {
        return this._alunosMatric.push(aluno)
    }

    removerAlunoEmDisciplina(nomeAluno) {
        const indiceRemocao = this._alunosMatric.findIndex((aluno) => aluno.nome === nomeAluno);
        return this._alunosMatric.splice(indiceRemocao, 1);
    }
}