import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {

    async store(req, res) {
        const SELECAO = req.body;
        const row = await SelecaoRepository.create(SELECAO);
        if(row != 0 ) res.status(201).json({"mensagem" : "Seleção cadastrada com sucesso!"});
        else res.status(404).json({"erro" : "Não foi possível cadastrar a seleção!"});
    }
    
    async index(req, res) {
        const row = await SelecaoRepository.findAll();
        if(row != 0 ) res.status(200).json(row);
        else res.status(404).json({"erro" : "Não foi possível consultar as seleções!"});
    }

    async show(req, res) {
        const row = await SelecaoRepository.findById(req.params.id);
        if(row != 0 ) res.status(200).json(row);
        else res.status(404).json({"erro" : "Não foi possível consultar a seleção!"});
    }

    async update(req, res) {
        const SELECAO = req.body;
        const row = await SelecaoRepository.update(SELECAO, req.params.id);
        if(row != 0 ) {
            if(row.changedRows == 0) res.status(200).json({"aviso" : "Nenhum campo foi alterado"});

            else res.status(200).json({"mensagem" : "Seleção atualizada com sucesso!"});
        }
        else res.status(404).json({"erro" : "Não foi possível atualizar a seleção!"});
    }
    async delete(req, res) {
        const row = await SelecaoRepository.delete(req.params.id);
        if(row != 0 ) {
            if(row.affectedRows == 0) res.status(200).json({"aviso" : "Nenhum campo foi deletado"});

            else res.status(200).json({"mensagem" : "Seleção deletada com sucesso!"});
        }
        else res.status(404).json({"erro" : "Não foi possível deletar a seleção!"});
    }
}

export default new SelecaoController();
