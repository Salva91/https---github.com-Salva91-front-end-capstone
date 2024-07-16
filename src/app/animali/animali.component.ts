import { Component, OnInit } from "@angular/core";
import { AdoptionStatus, IAnimal, TipoAnimale } from "../Models/ianimal";
import { AnimaliService } from "./animali.service";

@Component({
  selector: 'app-animali',
  templateUrl: './animali.component.html',
  styleUrls: ['./animali.component.scss']
})
export class AnimaliComponent implements OnInit {

  animali: IAnimal[] = [];
  animaliFiltrati: IAnimal[] = [];
  selectedAnimal: IAnimal | null = null;  // Questo rimane invariato per tenere traccia dell'animale selezionato
  newAnimal: Partial<IAnimal> = {
    nome: '',
    Descrizione: '',
    adoptionStatus: AdoptionStatus.DISPONIBILE,
    tipo: TipoAnimale.CANE,
    anni: 0,
    statoSalute: '',
    razza: '',
    mantello: '',
    sterilizzato: false,
    microchip: false,
    fotoUrl: '',
  };
  tipoFiltro: string = '';
  tipiAnimali: string[] = [];
  showForm: boolean = false;


  constructor(private animaliService: AnimaliService) { }

  ngOnInit(): void {
    this.caricaAnimali();
    this.caricaTipiAnimali();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.animaliFiltrati = [];
    } else {
      this.caricaAnimali();
    }
  }

  caricaAnimali(): void {
    this.animaliService.getAnimali().subscribe({
      next: (animali) => {
        this.animali = animali;
        this.filtraAnimali();
      },
      error: (error) => {
        console.error('Si è verificato un errore nel caricamento degli animali:', error);
      }
    });
  }

  caricaTipiAnimali(): void {
    this.tipiAnimali = Object.values(TipoAnimale);
  }

  filtraAnimali(): void {
    if (!this.tipoFiltro.trim()) {
      this.animaliFiltrati = [...this.animali];
    } else {
      const filtro = this.tipoFiltro.toLowerCase();
      this.animaliFiltrati = this.animali.filter(animale => animale.tipo.toLowerCase() === filtro);
    }
  }

  creaAnimale(): void {
    this.animaliService.createAnimale(this.newAnimal).subscribe({
      next: (animale) => {
        this.animali.push(animale);
        this.resetNewAnimal();
        this.toggleForm();
        this.filtraAnimali();
      },
      error: (error) => {
        console.error('Si è verificato un errore nella creazione dell\'animale:', error);
      }
    });
  }

  eliminaAnimale(id: number): void {
    this.animaliService.eliminaAnimale(id).subscribe({
      next: (message) => {
        console.log('Animale eliminato:', message);
        // Rimuovi l'animale dall'array
        this.animali = this.animali.filter(animale => animale.id !== id);
        if (this.selectedAnimal && this.selectedAnimal.id === id) {
          this.selectedAnimal = null;
        }
      },
      error: (error) => {
        console.error('Errore durante eliminazione animale:', error);
      }
    });
  }

  selezionaAnimale(animale: IAnimal): void {
    this.selectedAnimal = animale;
    this.animaliFiltrati = [];
  }

  annullaSelezione(): void {
    this.selectedAnimal = null;
    this.caricaAnimali();
  }

  private resetNewAnimal(): void {
    this.newAnimal = {
      nome: '',
      Descrizione: '',
      adoptionStatus: AdoptionStatus.DISPONIBILE,
      tipo: TipoAnimale.CANE,
      anni: 0,
      statoSalute: '',
      razza: '',
      mantello: '',
      sterilizzato: false,
      microchip: false,
      fotoUrl: '',
    };
  }

}
