import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  firstName:string;
  lastName:string;

  ngOnInit(){
    this.firstName = 'Guest';
    this.lastName = 'User';

    this.assignTitle(this.firstName, this.lastName);
  }

  assignTitle(fname:string, lname:string): void{
    this.title = `${fname} ${lname}`;
  }
}
