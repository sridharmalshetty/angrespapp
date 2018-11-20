import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private ser:UserServiceService) { }
 resp:any = {'message':''};
  ngOnInit() {
    this.getexpress()
  }

  getexpress(){
   this.ser.getexpressapi('http://localhost:3001/test').subscribe((data=>this.resp =  data))
  }

}
