class DisciplinaControlador {

    constructor(){
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nomeDisc").value;
        const codigoDisciplina = Number(document.querySelector("#codigoDisc").value);
        const disciplina = this.disciplinaServico.inserir(nomeDisciplina, codigoDisciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(nomeDisciplina, codigoDisciplina);
            alert('Disciplina inserida com sucesso!');
        } else {
            alert('Erro no preenchimento do cadastro!');
        }
    }

    removerDisciplinaDaLista(nome) {
        this.disciplinaServico.remover(nome);
    }

    mostrarDisciplinaNoHTML(nomeDisciplina, codigoDisciplina) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nomeDisciplina} - ${codigoDisciplina}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(nome);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

}