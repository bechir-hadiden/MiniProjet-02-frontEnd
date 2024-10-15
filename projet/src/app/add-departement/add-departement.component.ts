import { Component, OnInit } from '@angular/core';
import { Departement } from '../Model/departement.model';
import { DepartementService } from '../Service/departement.service';
import { College } from '../Model/college.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrl: './add-departement.component.css'
})
export class AddDepartementComponent implements OnInit {

  newDepartement = new Departement()
  newCollege?: College;
  newIdCol!: number;
  colleges !: College[];


  constructor(private departementService: DepartementService, private router: Router) { }

  ngOnInit(): void {
    this.departementService.listCollege()
        .subscribe(response => {
            console.log('Response from listCollege:', response);
            if (response && Array.isArray(response)) {
                this.colleges = response;
                console.log('Colleges:', this.colleges);
            } else {
                console.error('No colleges found in response');
            }
        }, error => {
            console.error('Error fetching colleges:', error);
        });
}



    
  addDepartement() {
    this.newDepartement.college = this.colleges.find(cat => cat.idcol == this.newIdCol)!;
    this.departementService.ajouterDepartement(this.newDepartement)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['departement']);
    });
    
  }



}
