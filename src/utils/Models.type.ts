export interface Model {
  id: number;
  name: string;
  description: string;
  image: string;
  especificacoes: {
    tipo: string;
    cilindrada: string;
    potenciaMaxima: string;
    torqueMaximo: string;
    transmissao: string;
    sistemaDePartida: string;
    diametroXCurso: string;
    relacaoDeCompressao: string;
    sistemaAlimentacao: string;
    combustivel: string;
    capacidade: string;
    oleoDoMotor: string;
  };
}
