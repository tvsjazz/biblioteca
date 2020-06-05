export interface Livro {
    _id: string;
    titulo: string;
    autor: string;
    paginas: number;
    descricao: string;
    nomeReserva?: string;
    reservado: boolean;
    emprestado: boolean;
    createdAt: string;
    __v: number;
    __proto__: object;
}
