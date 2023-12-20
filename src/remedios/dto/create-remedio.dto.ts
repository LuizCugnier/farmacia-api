export class CreateRemedioDto {
    nome: string;

    lote: number;

    validade: string;

    fabricante: string;

    quantidade: number;

    preco: number;

    generico: boolean;

    pedidoId?: number;
}