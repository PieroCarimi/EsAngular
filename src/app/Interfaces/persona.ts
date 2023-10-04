import { DataDiNascita } from "./data-di-nascita"
import { NomeCompleto } from "./nome-completo"

export interface Persona {
    nomeCompleto: NomeCompleto;
    dataDiNascita: DataDiNascita;
}