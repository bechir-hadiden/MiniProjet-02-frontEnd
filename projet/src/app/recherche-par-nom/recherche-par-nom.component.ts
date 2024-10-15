import { Component } from '@angular/core';
import { DepartementService } from '../Service/departement.service';
import { Departement } from '../Model/departement.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent {
  nomDepartement !: string ;
  departements!: Departement[];
  allDepartement : Departement[] = [];
  searchTerm!: string;



  constructor(private departementServices: DepartementService) {}

  rechercheDepartement(){
    this.departementServices.rechercherParNom(this.nomDepartement).
    subscribe(depar => {
    this.departements = depar;
    console.log(depar)});
    }


    ngOnInit(): void {
      this.departementServices.listeDepartements().subscribe(depar => {
        console.log(depar);
        this.departements = depar;

        });
        
    }


    onKeyUp(filterText : string){
      this.departements = this.allDepartement.filter(item =>
      item.nomDepartement?.toLowerCase().includes(filterText));
      }

}
