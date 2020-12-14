import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() items: string[][]
  @Output() salida = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(index: number) {
    console.log(index);
    this.salida.emit(index);
  }
}
