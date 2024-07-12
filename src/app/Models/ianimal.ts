export interface IAnimal {
id: number;
    nome: string;
    fotoUrl: string;
    anni: number; // Rappresentazione come stringa della data
    Descrizione: string;
    statoSalute: string;
    razza: string;
    mantello: string;
    sterilizzato: boolean;
    microchip: boolean;
    tipo: TipoAnimale; // Utilizzo dell'enum TipoAnimale
    proprietarioId: number; // ID del proprietario, se presente
    adoptionStatus: AdoptionStatus; // Utilizzo dell'enum AdoptionStatus
  }

  export enum TipoAnimale {
    CANE = 'CANE',
    GATTO = 'GATTO'
  }

  export enum AdoptionStatus {
    DISPONIBILE = 'DISPONIBILE',
    ADOTTATO = 'ADOTTATO'
  }

