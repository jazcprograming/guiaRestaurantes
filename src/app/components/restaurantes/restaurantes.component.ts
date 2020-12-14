import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  items:string[][]
  existe:Boolean=false
  constructor() { 
    this.items=([["",""]])
    this.items.splice(0,1)
  }

  ngOnInit(): void {
  }
  agregar(item:string[]){
    console.log("gg1")
    console.log(item)
    console.log("gg2")
    console.log(this.items)
    this.existe=false
    for (let i = 0; i< this.items.length ; i++){
      if((this.items[i]["nombre"].toString())===(item["nombre"].toString())&&(this.items[i]["ciudad"].toString())===(item["ciudad"].toString())){
      this.existe=true
      }
    }
    if(!this.existe){
      this.items.unshift(item)
      this.existe=false
    }
  }

}
