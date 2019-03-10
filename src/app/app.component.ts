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
  edad = null;

  constructor(private datosService: DatosService) {}
  

datos2 = this.datosService.retornarDatos();

  ngOnInit() {
    this.datosService.retornarDatos()
      .subscribe( result =>  this.datos = result)

  }

  buscar() {
    alert("Datos:"+this.datos.length);
    for(let x=0;x<this.datos.length;x++)
    if (this.datos[x].nombre==this.buscaNombre)
    {
      alert('Ya existe nombre');
      this.rut = this.datos[x].rut;
      this.edad = this.datos[x].edad;
      return;
    }     
    alert("Nombre no existe");
    

    /*this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });*/
    //this.art.codigo=null;
    //this.art.descripcion=null;
    //this.art.precio=null;    
  }
}
