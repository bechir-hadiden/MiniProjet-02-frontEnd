import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { RechercheParCollegeComponent } from './recherche-par-college/recherche-par-college.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCollegeComponent } from '../liste-college/liste-college.component';
import { UpdateCollegeComponent } from '../update-college/update-college.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { departementGuard } from './guard/departement.guard';

const routes: Routes = [


  {path: "departement", component : DepartementComponent},
  {path: "add-departement", component : AddDepartementComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  {path: "updateDepartement/:id", component: UpdateDepartementComponent},
  {path: "rechercheparcollege", component : RechercheParCollegeComponent},
  {path: "rechercheparnom", component : RechercheParNomComponent},
  {path: "listCollege", component : ListeCollegeComponent},
  {path: "updateCollege", component : UpdateCollegeComponent},
  {path: 'login', component: LoginComponent},
  {path: ' app-forbidden ', component: ForbiddenComponent},
  {path : 'departement' , component : DepartementComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
