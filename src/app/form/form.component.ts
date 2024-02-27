import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private usersvc:UserDataService){}
  fetchData() {
    this.usersvc.fetchData().subscribe((response) => {
      console.log('Response from API:', response);
      // Do whatever you need to do with the response data here
    });
  }
}
