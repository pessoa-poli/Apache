import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magika.org';
  
  constructor(){}

  public deliveMeTheManual() {
    console.log('Ready');
    this.goToLink("/manual/manual.pdf")
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
