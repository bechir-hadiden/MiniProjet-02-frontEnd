import { Component, Input, OnInit } from '@angular/core';
import { College } from '../app/Model/college.model';
import { DepartementService } from '../app/Service/departement.service';

@Component({
  selector: 'app-liste-college',
  templateUrl: './liste-college.component.html',
  styles: ``
})
export class ListeCollegeComponent implements OnInit {
  colleges!: any;


  ajout:boolean=true;


  updatedCol:College = {"idcol":0,"nomcol":""};

  constructor(private departementServices: DepartementService) { }


  ngOnInit(): void {
    // this.departementServices.listCollege().subscribe(
    //   (cats) => {
    //     console.log(cats); // Vérifiez que cats est bien un tableau
    
    //     // Assurez-vous que cats est un tableau
    //     if (Array.isArray(cats)) {
    //       this.colleges = cats; // Assignez directement le tableau
    //       console.log(this.colleges); // Vérifiez que la liste est bien assignée
    //     } else {
    //       console.error('Aucune donnée trouvée pour colleges');
    //     }
    //   },
    // );


    this.chargerCollege();
 
}


collegeUpdated(col:College){
  console.log("col updated event",col);
  this.departementServices.ajouterCollege(col).
   subscribe( ()=> this.chargerCollege());
  }


chargerCollege() {
  this.departementServices.listCollege(). subscribe(col => {this.colleges = col;
    console.log(col);
    });

}





updateCol(col:College) {
  this.updatedCol=col;
  this.ajout=false;
  }


// collegeUpdate(col :College) {
//   console.log("catégorie reçue du composant updateCAtegorie ",col);
//   this.departementServices.ajouterDepartement(col).subscribe( ()=> this.chargerCollege());


// }

// updateCol(col :College)
// {
//   this.updateCol = col;
//   this.ajout=false;
// }
}