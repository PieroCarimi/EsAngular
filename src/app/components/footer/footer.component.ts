import { Component,OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnDestroy, OnInit{
  ngOnDestroy():void{
    console.log("Sono stato distrutto");
  }
  ngOnInit(){
    console.log("Sono stato inizializzato");
  }
}
