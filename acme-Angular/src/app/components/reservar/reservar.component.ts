import { ReservaService } from './../../services/reserva.service';
import { Reserva } from './../../models/Reserva';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit 
{
  formReserva: FormGroup
  reservas: Reserva[]
  msg: String

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void 
  {
    this.buildFormReserva()
    this.getReservas()
  }

  private buildFormReserva()
  {
    this.formReserva = new FormGroup({
      room: new FormControl('', [Validators.required]),
      arrival: new FormControl('', [Validators.required]),
      departure: new FormControl('', [Validators.required]),
      adults: new FormControl('', [Validators.required]),
      children: new FormControl('', [Validators.required])
    })
  }

  saveReserva(reserva: Reserva)
  {
    this.reservaService.save(reserva)
          .pipe(first())
          .subscribe(
            res => {
              console.log(res)
              this.formReserva.reset()
              this.getReservas()              
              this.msg = "Reserva Exitosa"
              this.getReservas()
            },
            error => {
              console.log(error)
              this.msg = error.error.msg
            }
          )
  }

  deleteReserva(id: string)
  {
    console.log("ID: ",id)
    this.reservaService.delete(id)
        .subscribe(
          res => {
            console.log(res)
          },
          err => {
            console.log(err)
          }
        )
  }

  getReservas()
  {
    this.reservaService.get()
        .subscribe(
          res => {
            this.reservas = res
          },
          error => {
            console.log(error)
          }
        )
  }

}
