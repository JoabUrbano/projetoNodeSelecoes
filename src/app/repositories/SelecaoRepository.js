import criarQuery from "../database/conexao.js";

class SelecaoRepository {

    async create(SELECAO) {
        try {
            const SQL = `INSERT INTO selecoes (nome_selecao, grupo_selecao) VALUES ("${SELECAO.selecao}", "${SELECAO.grupo}");`;
            const row = await criarQuery(SQL);
            return(row);
        }
        catch(erro) {
            throw "Não foi possivel cadastrar a seleção!"
        }
    }

    async findAll() {
        try {
            const SQL = "SELECT * FROM selecoes;";
            const row = await criarQuery(SQL);
            return row
        }
        catch(erro) {
            throw "Não foi possível vizualizar as seleções!";
        }
    }

    async findById(id) {
        try {
            const SQL = `SELECT * FROM selecoes where id=${id};`;
            const row = await criarQuery(SQL);
            return row
        }
        catch(erro) {
            throw "Não foi possível vizualizar a seleção com o id informado!";
        }
    }

    async update(SELECAO, id) {
        try {
            const SQL = `UPDATE selecoes SET nome_selecao = "${SELECAO.selecao}", grupo_selecao = "${SELECAO.grupo}" WHERE id = ${id};`;
            const row = await criarQuery(SQL);
            return row;
        }
        catch(erro) {
            throw "Não foi possível atualizar os dados da seleção informada!";
        }
    }

    async delete(id) {
        try {
            const SQL = `DELETE FROM selecoes WHERE id = ${id};`;
            const row = await criarQuery(SQL);
            return row;
        }
        catch(erro) {
            throw "Não foi possível deletar os dados da seleção informada!";
        }
    }
}

export default new SelecaoRepository();
