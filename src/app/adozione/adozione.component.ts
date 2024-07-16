
import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../Models/ianimal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adozione',
  templateUrl: './adozione.component.html',
  styleUrl: './adozione.component.scss'
})
export class AdozioneComponent implements OnInit {

  selectedAnimal: IAnimal | null = null;

  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  selezionaAnimale(animale: IAnimal): void {
    this.selectedAnimal = animale;
  }

  navigateToAnimals(): void {
    this.router.navigate(['/animali']);
  }
}
