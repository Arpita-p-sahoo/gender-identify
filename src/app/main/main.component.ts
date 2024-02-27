import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  datas:any[]=[];
  constructor(private usersvc:UserDataService){}
  ngOnInit(): void {
    this.usersvc.data = this.datas;
  }

}
