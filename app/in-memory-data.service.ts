import { InMemoryDbService } from "angular-in-memory-web-api";

import { Contato } from "./contatos/contato.model";

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {
        let contatos: Contato[] =[
            {id: 1, nome: "Fulano de Tal", email: "fulano@s.com", telefone: "(00) 0000-0000"},
            {id: 2, nome: "Ciclano", email: "ciclano@s.com", telefone: "(00) 0000-0000"},
            {id: 3, nome: "Pessoa", email: "pessoa@s.com", telefone: "(00) 0000-0000"},
            {id: 4, nome: "Pessoa2", email: "pessoa2@s.com", telefone: "(00) 0000-0000"},
            {id: 5, nome: "Pessoa de Tal", email: "pessoadetal@s.com", telefone: "(00) 0000-0000"}
        ];

        return {contatos};
    }
}