import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Practica } from 'src/app/generals/interface/practica';



@Injectable({
  providedIn: 'root'
})
export class GetjsonService {

  configURL='https://my-json-server.typicode.com/mavericc/demo/perfiles';  

  constructor(private http: HttpClient) { }

    getConfig() {
      return this.http.get(this.configURL);
    }

    dropConfig(i) {
    return this.http.delete(this.configURL+"/"+i);
  }

    PostConfig(Datos) {

      const json = JSON.stringify(Datos);
      const headers = new HttpHeaders().set( 'Content-Type', 'application/json')

      return this.http.post(this.configURL, json, {headers}).pipe(
        catchError(this.handleError)
      );

    }

    

    private handleError(error: HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
        //ha ocurrido un error del lado del cliente o de la red. manejarlo en consecuencia
        console.error('Ocurrio un error',error.error.message );
      }else{
        // el backend devolvió un código de respuesta sin éxito.
        // el cuerpo de respuesta puede cantar clúsicamente en cuanto a lo que salió mal,
        console.error('Backend returned code ${error.status}, ' + '${error.status}');
      }
      // devuelve un observable con un mensaje de error orientado al usuario
      return throwError('Something bad happened; please try again later.');
    }

    }

