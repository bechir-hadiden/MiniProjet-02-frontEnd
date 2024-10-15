import { Component, OnInit } from '@angular/core';
import { Departement } from '../Model/departement.model';
import { DepartementService } from '../Service/departement.service';
import { College } from '../Model/college.model';

@Component({
  selector: 'app-recherche-par-college',
  templateUrl: './recherche-par-college.component.html',
  styles: ``
})
export class RechercheParCollegeComponent implements OnInit {
  idcollege!: number   // ou une valeur par défaut comme 0 ou l'ID du premier collège
  colleges: College[] = []; // Initialisez comme un tableau vide
  departements: any[] = [];
  constructor(private departementServices: DepartementService) {}
  
  ngOnInit(): void {
    this.departementServices.listCollege().subscribe(
      (cats) => {
        console.log(cats); // Vérifiez que cats est bien un tableau
    
        // Assurez-vous que cats est un tableau
        if (Array.isArray(cats)) {
          this.colleges = cats; // Assignez directement le tableau
          console.log(this.colleges); // Vérifiez que la liste est bien assignée
        } else {
          console.error('Aucune donnée trouvée pour colleges');
        }
      },
    );
 
}
  
  
  
onChange() {
  console.log("ssssssssss")

  this.departementServices.rechercherParCollege(this.idcollege).
  subscribe(depar =>
    {this.departements=depar

      console.log(depar +"ssssssssss")

    }
  );

  }
}



