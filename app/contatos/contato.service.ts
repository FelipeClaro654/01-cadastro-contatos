import { Injectable } from "@angular/core";

import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos-mock";

@Injectable()
export class ContatoService {

    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }

    getContato(id: number): Promise<Contato>{
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find((contato) => contato.id === id ));
    }

    getContatosSlowly(): Promise<Contato[]>{
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        })
        .then(() => {
            console.log("Primeiro then");
            return "Curso Angular 2";
        })
        .then((param: string) => {
            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log("Continuando após 4s");
                    resolve2();
                }, 2000)
            })
        })
        .then(() => {
            console.log("terceiro then");
            return this.getContatos();
        });
    }
}