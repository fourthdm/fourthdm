import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

scrolltop = document.getElementById('scrolltop');
rootelement = document.documentElement;

scroll(){
  this.rootelement.scrollTo({
    top:0,
    behavior:'smooth'
  })
}

}
