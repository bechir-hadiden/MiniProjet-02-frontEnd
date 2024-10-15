import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { FormsModule } from '@angular/forms';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCollegeComponent } from './recherche-par-college/recherche-par-college.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from '../search-filter.pipe';
import { ListeCollegeComponent } from '../liste-college/liste-college.component';
import { UpdateCollegeComponent } from '../update-college/update-college.component';
import { CollegeWrapper } from './Model/collegeWarped';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    RechercheParCollegeComponent,
    RechercheParNomComponent,
    SearchFilterPipe ,
    ListeCollegeComponent,
    UpdateCollegeComponent,
    LoginComponent,
    ForbiddenComponent, 
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule ,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
