import { Component } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent {

  pcount :number = 0;

  pcountstop:any = setInterval(()=>{
    this.pcount++;

    if(this.pcount == 5){
      clearInterval(this.pcountstop);
    }
  },400);


  yearcount :number = 0;

  yearcountstop:any = setInterval(()=>{
    this.yearcount++;

    if(this.yearcount == 66){
      clearInterval(this.yearcountstop);
    }
  },30)


  professioncount :number = 0;

  professioncountstop:any = setInterval(()=>{
    this.professioncount++;

    if(this.professioncount == 76){
      clearInterval(this.professioncountstop);
    }
  },30)

  clientcount :number = 0;

  clientcountstop:any = setInterval(()=>{
    this.clientcount++;

    if(this.clientcount == 40){
      clearInterval(this.clientcountstop);
    }
  },30)

}

