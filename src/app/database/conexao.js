import mysql from "mysql"
import dotenv from 'dotenv';

dotenv.config();

const CONEXAO = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: process.env.SENHA_BD,
    database: "bd_copa"
});

CONEXAO.connect((erro) => {
    if(erro){
        console.log(`A conexão apresentou o seguinte erro: ${erro}`);
    }
    else{
        console.log("Conexão realizada com sucesso!");
    }
});

/**
 * Executa o código SQL do CRUDE
 * @param {string} SQL Instrução SQL a ser executada
 * @returns Retorna o resultado da query, que pode ser uma seleção ou os dados de linhas modificadas, criadas e etc ou 0 se ocorrer um erro
 */
function criarQuery(SQL) {
    return new Promise((resolve, reject) => {
        CONEXAO.query(SQL, (erro, result) => {
            if(erro) return reject(0);
            else {
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            }
        });
    })
}

export default criarQuery;
