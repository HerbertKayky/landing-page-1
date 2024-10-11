export interface Model {
  id: number;
  name: string;
  description: string;
  image: string;
  especificacoes: {
    Tipo: string;
    Cilindrada: string;
    PotênciaMáxima: string;
    TorqueMáximo: string;
    Transmissão: string;
    SistemaDePartida: string;
    DiâmetroXCursos: string;
    RelaçãoDeCompressão: string;
    SistemaAlimentacao: string;
    Combustível: string;
    Capacidade: string;
    ÓleoDoMotor: string;
  };
}
