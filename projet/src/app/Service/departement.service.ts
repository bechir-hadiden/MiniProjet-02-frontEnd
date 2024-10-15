import { Injectable } from '@angular/core';
import { College } from '../Model/college.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../Model/departement.model';
import { CollegeWrapper } from '../Model/collegeWarped';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';




const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})




export class DepartementService {
  // departement!: Departement;
  departements!: Departement[]; //un tableau de Produit
  // colleges !: College[];




  apiURL: string = 'http://localhost:8091/departements/api';

  api : string = 'http://localhost:8091/departements/col'

  api_update : string = 'http://localhost:8091/departements/api/departements'
  
  api_Departement : string = "http://localhost:8091/departements/api/all"

  api_ajoutDepartement : string = "http://localhost:8091/departements/api/addDepar"

  api_deleteDepar : string = "http://localhost:8091/departements/api/"

  constructor(private http : HttpClient , private authService : AuthService ) {
  }

  
// partie Departement 

listeDepartements(): Observable<Departement[]> {
  let jwt = this.authService.getToken();
  jwt = "Bearer " + jwt;

  // Utilisation de HttpHeaders pour les en-têtes
  const headers = new HttpHeaders({
    'Authorization': jwt
  });

  // Options de requête, vous pouvez également ajouter d'autres options si nécessaire
  const options = { headers: headers };

  console.log(jwt);

  // Utilisation de la méthode http.get avec les options
  return this.http.get<Departement[]>(this.api_Departement, options);
}



  rechercherParNom(nomcol: string):Observable< Departement[]> {
    const url = `${this.apiURL}/DeparByName/${nomcol}`;

    

    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
  
    // Utilisation de HttpHeaders pour les en-têtes
    const headers = new HttpHeaders({
      'Authorization': jwt
    });
  
    // Options de requête, vous pouvez également ajouter d'autres options si nécessaire
    const options = { headers: headers };
  
    console.log(jwt);
  
    // Utilisation de la méthode http.get avec les options
    return this.http.get<Departement[]>(this.api_Departement, options);


    return this.http.get<Departement[]>(url);

    }
    

    ajouterDepartement(depar: Departement): Observable<Departement> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
    
      const headers = new HttpHeaders({
        'Authorization': jwt
      });
    
      const options = { headers: headers };
    
      console.log(jwt + "hello from ajout ");
    
      // Utilisation de POST pour ajouter le département
      return this.http.post<Departement>(this.api_ajoutDepartement , depar, options);


       // return this.http.post<Departement>(this.apiURL, depar, httpOptions);
    }
    
    

  supprimerDepartement(id: number) {
    const url = `${this.apiURL}/delDepar/${id}`;

    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
  
    // Utilisation de HttpHeaders pour les en-têtes
    const headers = new HttpHeaders({
      'Authorization': jwt
    });
  
    // Options de requête, vous pouvez également ajouter d'autres options si nécessaire
    const options = { headers: headers };
  
    console.log(jwt);
  
    // Utilisation de la méthode http.get avec les options
    return this.http.delete<Departement[]>(url, options);
    // const url = `${this.apiURL}/${id}`;
    // return this.http.delete(url, httpOptions);

  }


  consulterDepartement(id: number): Observable<Departement> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
    
      const headers = new HttpHeaders({
        'Authorization': jwt
      });
    
      const options = { headers: headers };
    
      console.log(jwt);
    
      // Utilisation de POST pour ajouter le département
      return this.http.get<Departement>(url ,  options); 
  }
  

  updateDepartement(depar: Departement) :  Observable<Departement>{
    
    console.log("hello sousou");

    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;

    // Utilisation de HttpHeaders pour les en-têtes
    const headers = new HttpHeaders({
      'Authorization': jwt
    });
  
    // Options de requête, vous pouvez également ajouter d'autres options si nécessaire
    const options = { headers: headers };
  
    console.log(jwt+"oooooo");
  
    // Utilisation de la méthode http.get avec les options
    return this.http.put<Departement>(this.api_update ,depar , options)


    // return this.http.put<Departement>(this.api_update, depar, httpOptions);


  }

  trierDepartements() {
    this.departements = this.departements.sort((n1, n2) => {
      if (n1.idDepartement! > n2.idDepartement!) {
        return 1;
      }
      if (n1.idDepartement! < n2.idDepartement!) {
        return -1;
      }
      return 0;
    });
  }

  // partie College 

   ajouterCollege( col: College):Observable<College>{
    return this.http.post<College>(this.api, col, httpOptions);
    }

    rechercherParCollege(idcol: number):Observable< Departement[]> {
    const url = `${this.apiURL}/deparscol/${idcol}`;


    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
  
    const headers = new HttpHeaders({
      'Authorization': jwt
    });
  
    const options = { headers: headers };
  
    console.log(jwt);
  
    // Utilisation de POST pour ajouter le département
    return this.http.get<Departement[]>(url ,  options);

    // return this.http.get<Departement[]>(url);
    }

    
    listCollege(): Observable<College> {

      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
    
      // Utilisation de HttpHeaders pour les en-têtes
      const headers = new HttpHeaders({
        'Authorization': jwt
      });
    
      // Options de requête, vous pouvez également ajouter d'autres options si nécessaire
      const options = { headers: headers };
    
      console.log(jwt);




    return this.http.get<College>(this.api ,options).pipe(
      tap((response) => {
        console.log(response);
      }),
     
    );
  }


  // consulterCollege(idCol:number): College
  // {
  //     return this.colleges.find(col => col.idcol == idCol)!;
  // }



  
   
        
}