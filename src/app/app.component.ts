import { Component, OnInit } from '@angular/core';
import  { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-angular-consume';

  private datos = null;
  
  buscaNombre = null;
  rut = null;

  constructor(private datosService: DatosService) {}
  
  ngOnInit() {
    this.datosService.retornar()
      .subscribe( result =>  this.datos = result)

  }

  buscar() {
    alert("Datos:"+this.datos.length);
    for(let x=0;x<this.datos.length;x++)
    if (this.datos[x].nombre==this.buscaNombre)
    {
      alert('Ya existe nombre');
      this.rut = this.datos[x].rut;
      return;
    }     
    alert("Nombre no existe");
      
  }

}
