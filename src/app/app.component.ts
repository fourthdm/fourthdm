import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourthdm';
  
  scrollToTopBtn = document.getElementById("scrollToTopBtn");
  rootElement = document.documentElement;


  scrollToTop() {
    this.rootElement.scrollTo({
     top: 0,
     behavior: "smooth"
   });
 }
 
}
