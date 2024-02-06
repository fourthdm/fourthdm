import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  
  scrollToTopBtn = document.getElementById("scrollToTopBtn");
  rootElement = document.documentElement;


  scrollToTop() {
    this.rootElement.scrollTo({
     top: 0,
     behavior: "smooth"
   });
 }

}
