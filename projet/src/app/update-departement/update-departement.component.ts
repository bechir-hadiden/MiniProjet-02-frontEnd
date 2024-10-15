import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../Service/departement.service';
import { Departement } from '../Model/departement.model';
import { College } from '../Model/college.model';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styles: []
})
export class UpdateDepartementComponent {

  colleges!:College[];
  updateColId !: number |undefined ;
  currentDepartement  = new Departement() ;
  listDepartement : any ; 
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private departementService: DepartementService) { }

  ngOnInit(): void {
    this.departementService.listCollege().subscribe(cats => {
        console.log(cats); // Log the response to inspect its structure
        if (Array.isArray(cats)) {
            this.colleges = cats;
        } else {
            console.error('Unexpected response structure:', cats);
            this.colleges = []; // Initialize to an empty array to avoid further errors
        }
    });

    this.departementService.consulterDepartement(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
        if (prod) {
            this.currentDepartement = prod;
            this.updateColId = this.currentDepartement.college?.idcol;
        } else {
            console.error('Unexpected response structure:', prod);
        }
    });
}


    

  

  updateDepartement() {
    this.currentDepartement.college = this.colleges.find(cat => cat.idcol == this.updateColId)!;
         this.departementService.updateDepartement(this.currentDepartement).subscribe(prod => {
      this.router.navigate(['departement']); }
      );
  }
  
  

  
    
  


  

}


