class DisciplinaRepositorio {

    constructor() {
        this._disciplinas = [];

    }

    inserirDisc(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina

    }

    removerDisc(nomeDisc) {
        let indiceRemocao = this._disciplinas.findIndex((disciplina) => disciplina.nomeDisc === nomeDisc);
        this._disciplinas.splice(indiceRemocao, 1);

    }

    listarDisc() {
        return this._disciplinas

    }

    buscarDisc() {
        return this._disciplinas.filter((disciplina) => disciplina.nomeDisc === nomeDisc);

    }

}
