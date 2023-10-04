import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges{
  
  isOpen: boolean = false;
  numbers: number[] = [1,2,5,1,74,34,89,54];
  string: string = "";

  constuctor(){
    console.log("Io sono il costruttore");
    this.string = "Sono la stringa del costruttore";
    if(this.isOpen){
      //fai questo
    }else{
      //fai questo
    }
  }
  
  ngOnInit(){
    console.log("Io sono onInit");
    this.string = "Sono la stringa dell'OnInit";
    setTimeout(() =>{
      this.string = "Sono la stringa";
    },10000)
  }

  ngOnDestroy(){
    //utilizzato quando il componente viene distrutto
    this.string = "";
  }

  ngOnChanges(changes: SimpleChanges) {
    //si occupa di gestire cambiamenti all'interno della nostra applicazione
    console.log(changes)
  }

}
