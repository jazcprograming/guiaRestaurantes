import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Output() salida = new EventEmitter();
  @Input() items: string[][]
  @Input() existe:Boolean
  nombre:string=''
  ciudad:string=''
  constructor() { }

  ngOnInit(): void {
  }
  agregar() {
    console.log({nombre:this.nombre,ciudad:this.ciudad});
    if(this.nombre.length>0&&this.ciudad.length>0){
    this.salida.emit({nombre:this.nombre,ciudad:this.ciudad});
    this.nombre=''
    this.ciudad=''}
  }
  


}
