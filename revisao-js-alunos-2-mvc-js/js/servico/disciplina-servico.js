class DisciplinaServico {
    constructor() {
        this._repositorioDisciplina = new DisciplinaRepositorio();
    }


    inserirDisc(codigo, nome) {
        const disciplina = new Disciplina(codigo, nome);
        return this._repositorioDisciplina.inserirDisc(disciplina);
    }

    removerDisc(nomeDisc) {
        this._repositorioDisciplina.removerDisc(nomeDisc);
    }

    listarDisc() {
        return this._repositorioDisciplina.listarDisc();
    }

    buscDisc(nomeDisc) {
        return this._repositorioDisciplina.buscarDisc(nomeDisc);
    }

    }
