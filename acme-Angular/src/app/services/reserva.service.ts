import { Reserva } from './../models/Reserva';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService
{
  readonly URL_API = "http://localhost:3000/acme/api/reservas";

  constructor(private http: HttpClient) { }

  save(reserva: Reserva)
  {
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    return this.http.post<{control: string}>(this.URL_API, reserva, { headers: header })    
  }

  delete(id: string)
  {
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    console.log("iD:",id)
    header.set("id", id)
    return this.http.delete<{control: string}>(this.URL_API, { headers: header })
  }

  get()
  {
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    return this.http.get<Reserva[]>(this.URL_API, { headers: header });
  }
  

}
