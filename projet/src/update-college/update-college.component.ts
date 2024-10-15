import { Component, EventEmitter, Input, Output } from '@angular/core';
import { College } from '../app/Model/college.model';

@Component({
  selector: 'app-update-college',
  templateUrl: './update-college.component.html',
  styles: ``
})


export class UpdateCollegeComponent {
  


  @Input()
  college! : College;

  @Input()
  ajout!:boolean;


  @Output() 
   collegeUpdated = new EventEmitter<College>();


   saveCollege(){
    this.collegeUpdated.emit(this.college);
    }
}
