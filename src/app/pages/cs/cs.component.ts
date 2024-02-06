import { Component } from '@angular/core';

@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html',
  styleUrls: ['./cs.component.css']
})
export class CsComponent {

scrolltop = document.getElementById('scrolltop');
rootelemnt = document.documentElement;

scroll(){
  this.rootelemnt.scrollTo({
    top:0,
    behavior:'smooth'
  })
}

}
